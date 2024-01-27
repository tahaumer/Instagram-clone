import heartIcon from "../media/heart-solid.svg";
import commentIcon from "../media/comment-solid.svg";
import user from "../media/user.jpg";
import Footer from "./Footer";

const PostsSection = () => (
  <>
    <div className="grid grid-cols-3 gap-1 mx-2 md:mx-auto md:w-[80vw] lg:w-[65vw]">
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] flex justify-center items-center group">
        <img
          className="w-full h-full group-hover:brightness-50"
          src={user}
          alt=""
        />
        <div className="absolute hidden md:flex">
          <div className="group-hover:flex hidden text-white mr-4">
            <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
            120
          </div>
          <div className="group-hover:flex hidden text-white mr-4">
            <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
            20
          </div>
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#2C2C2C] hover:bg-[#2c2c2c76] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#B4B4B4] hover:bg-[#b4b4b47b] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full]  bg-[#333333] hover:bg-[#1b1b1b75] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#383838] hover:bg-[#1b1b1b7b] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#9b9b9b] hover:bg-[#1b1b1b78] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#B4B4B4] hover:bg-[#b4b4b480] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#2C2C2C] hover:bg-[#2c2c2c76] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#9b9b9b] hover:bg-[#9b9b9b81] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full]  bg-[#383838] hover:bg-[#38383876] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#B4B4B4] hover:bg-[#b4b4b47e] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#2C2C2C] hover:bg-[#2c2c2c76] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
      <div className="w-[full] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] bg-[#2C2C2C] hover:bg-[#2c2c2c76] flex justify-center items-center group">
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
          120
        </div>
        <div className="md:group-hover:flex hidden text-white mr-4">
          <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
          20
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default PostsSection;
