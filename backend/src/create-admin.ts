import dotenv from 'dotenv'
dotenv.config()

import { auth } from './firebase'
import { connectDb, getUsersCollection } from './db'

async function createOrUpdateAdmin() {
  const email = process.argv[2] || 'monirhraju@gmail.com'
  const password = process.argv[3] || 'AmaarApp@2026'
  const displayName = process.argv[4] || 'Amaar App Admin'

  console.log(`\n🔐 Configuring Admin Account for: ${email}...`)

  if (password.length < 6) {
    console.error('❌ Error: Password must be at least 6 characters long.')
    process.exit(1)
  }

  try {
    // 1. Create or update user in Firebase Auth
    let userRecord
    try {
      userRecord = await auth.getUserByEmail(email)
      console.log(`ℹ️ User already exists in Firebase (UID: ${userRecord.uid}). Updating password & profile...`)
      userRecord = await auth.updateUser(userRecord.uid, {
        password,
        displayName,
        disabled: false,
      })
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        console.log('ℹ️ Creating new user in Firebase Authentication...')
        userRecord = await auth.createUser({
          email,
          password,
          displayName,
        })
      } else {
        throw err
      }
    }

    // 2. Set Firebase Admin Custom Claims
    await auth.setCustomUserClaims(userRecord.uid, { admin: true, role: 'admin' })
    console.log('✅ Firebase custom claims set: { admin: true, role: "admin" }')

    // 3. Connect to MongoDB and upsert user with role: 'admin'
    await connectDb()
    await getUsersCollection().updateOne(
      { firebaseUid: userRecord.uid },
      {
        $set: {
          firebaseUid: userRecord.uid,
          email: userRecord.email || email,
          displayName: userRecord.displayName || displayName,
          role: 'admin',
          status: 'active',
          termsAccepted: true,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    )

    console.log('✅ MongoDB user profile updated with role: "admin"')
    console.log('\n=============================================')
    console.log('🎉 ADMIN CREDENTIALS READY')
    console.log('=============================================')
    console.log(`📧 Email:    ${email}`)
    console.log(`🔑 Password: ${password}`)
    console.log(`👑 Role:     admin`)
    console.log('=============================================\n')
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Failed to set admin credentials:', error.message || error)
    process.exit(1)
  }
}

createOrUpdateAdmin()
