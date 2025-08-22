import bcrypt from "bcryptjs";

async function generateHash() {
    const hashedPassword = await bcrypt.hash("123456", 10);
    console.log("Hashed password:", hashedPassword);
}

generateHash();
