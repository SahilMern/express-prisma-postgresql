const prisma = require("../DB/db.config");
const createComment = async (req, res) => {
  try {
    const { user_Id, post_id, comment } = req.body;

    //This is for updating post comment 
    await prisma.post.update({
        where: {
          id: Number(post_id),
        },
        data: {
          comment_count: {
            increment: 1,
          },
        },
      });

    console.log(req.body, "s", user_Id, post_id, comment);
    const addCommentOnPost = await prisma.comment.create({
      data: {
        user_Id: Number(user_Id),
        post_id: Number(post_id),
        comment: comment,
      },
    });
    return res.status(200).json({
      message: "Comment added on post",
      addCommentOnPost,
    });
  } catch (error) {
    console.log(error, "error In");
  }
};
const fetchcomment = () => {
  try {
  } catch (error) {
    console.log(error, "error In");
  }
};

const updatecomment = () => {};
const deletecomment = () => {};
const showMyComment = () => {
  try {
  } catch (error) {
    console.log(error, "error");
  }
};
module.exports = {
  createComment,
  fetchcomment,
  updatecomment,
  deletecomment,
  showMyComment,
};
