const prisma = require("../DB/db.config");
const bcrypt = require("bcryptjs");

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({ message: "All users data", users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching users" });
  }
};

// Fetch user by unique ID
const getUserById = async (req, res) => {
  const userId = Number(req.params.id);
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User data", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching user" });
  }
};

// Update user details
const updateUser = async (req, res) => {
  const userId = Number(req.params.id);
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, password },
    });

    return res
      .status(200)
      .json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating user" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const userId = Number(req.params.id);

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    return res
      .status(200)
      .json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting user" });
  }
};

// get My Post
const fetchuserWithPost = async(req, res) => {
  try {
    const userdata = await prisma.user.findMany({
      // include:{
      //   // post:true
      //   post:{
      //     select:{
      //       title:true,
      //       comment_count:true
      //     }
      //   }
      // }
      where:{
        post:post_c
      }
    })
    return res.status(200).json({
      message:"All data with post",
      userdata
    })
  } catch (error) {
    console.log(error, "error");
    
  }
}
module.exports = {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
  fetchuserWithPost
};
