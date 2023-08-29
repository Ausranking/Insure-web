const BlogCard = ({ imgUrl, blogTitle, blog }) => {
  return (
    <>
      <img src={imgUrl} alt='topic icon' width={86} height={86} className="bg-primary-blue rounded-full" />
      <h2 className="text-dark-violet text-2xl font-semibold ">{blogTitle}</h2>
      <p className="text-xl px-12  text-primary-violet text-center tracking-tighter ">
        {blog}
      </p>
    </>
  );
};

export default BlogCard;
