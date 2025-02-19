const prisma = require("../DB/db.config");

// Create a new post
const createPost = async (req, res) => {
  const { user_Id, title, description } = req.body;

  try {
    // Check if the user exists
    const userExists = await prisma.user.findUnique({
      where: { id: user_Id },
    });

    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    // Create a new post
    const newPost = await prisma.post.create({
      data: {
        user_Id,
        title,
        description,
      },
    });

    return res
      .status(201)
      .json({ message: "Post created successfully", newPost });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Fetch all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        comment:{
          include:{
            // user:true
            user:{
              select:{
                name:true
              }
            }
          }
        } // To include the user details along with the post
      },
    });
    return res.status(200).json({ message: "All posts", posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching posts" });
  }
};

// Fetch a post by unique ID
const getPostById = async (req, res) => {
  const postId = Number(req.params.id);

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: true, // To include the user details along with the post
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({ message: "Post data", post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching post" });
  }
};

// Update a post
const updatePost = async (req, res) => {
  const postId = Number(req.params.id);
  const { title, description } = req.body;

  try {
    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Update post data
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { title, description },
    });

    return res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating post" });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  const postId = Number(req.params.id);

  try {
    const deletedPost = await prisma.post.delete({
      where: { id: postId },
    });

    return res.status(200).json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting post" });
  }
};

module.exports = {
  createPost,
  updatePost,
  getAllPosts,
  getPostById,
  deletePost,
};
