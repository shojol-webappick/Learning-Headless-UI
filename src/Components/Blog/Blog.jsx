import { useGetBlogsQuery } from "../../Redux/Features/BlogFeture/BlogApi";
import Loading from "../../Utils/Loader/Loading";
import SectionTitle from "../../Utils/SectionTitle";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data, isError, isLoading } = useGetBlogsQuery();
  console.log(data);
  return (
    <div>
      <SectionTitle title={"See Our Blogs"} />
      <div className="flex justify-between items-center flex-wrap container mx-auto ">
        {isLoading ? (
          <div className="flex  justify-center items-center w-full">
            <Loading />
          </div>
        ) : isError ? (
          <p>Blog not found</p>
        ) : (
          data.map((blog) => <BlogCard key={blog?.id} data={blog} />)
        )}
      </div>
    </div>
  );
};

export default Blog;
