import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
import toast from "react-hot-toast";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../app/Components/Loader/Loader";
import Comment from "../../app/Components/Comment/Comment";
import { IPortfolio } from "../../app/utils";
import Button from "../../app/Components/Button/Button";
import { RootState } from "../../app/store";
import { setComment, setLike } from "../../app/redux/portfolio";
import Meta from "../../app/Components/Meta/Meta";

const PortfolioDetails = () => {
  const router = useRouter();
  const { title } = router.query;
  const [data, setData] = useState<IPortfolio>();
  const [loading, setLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { like, comment } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    const getSingleData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_PROXY_URL}/portfolio/${title}`
        );
        setData(data?.portfolio);
        const like = { like: data?.portfolio?.reactBy } as any;
        dispatch(setLike(like));
        const comment = { comment: data?.portfolio?.comments } as any;
        dispatch(setComment(comment));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    title && getSingleData();
  }, [title]);

  const addReactToPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_PROXY_URL}/like/${title}`
      );
      toast.success("Liked Added");
      setLoading(false);
      const like = { like: data?.portfolio?.reactBy } as any;
      dispatch(setLike(like));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addCommentToPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_PROXY_URL}/comment/${title}`,
        {
          text,
        }
      );
      setText("");
      toast.success("Comment Added");
      setLoading(false);
      const comment = { comment: data?.portfolio?.comments } as any;
      dispatch(setComment(comment));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setShareUrl(document.URL);
  }, []);

  return (
    <>
      { data && <Meta title={`Razu Islam - ${data.name}`} />}
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.portfolioDetails}>
          <div className="container">
            <div className={styles.portContainer}>
              <div className={styles.portImg}>
                {data?.img && (
                  <Image
                    src={data?.img}
                    alt="Razu Islam"
                    width={1000}
                    height={500}
                  />
                )}
              </div>
              <h1 className={styles.text}>
                Application Name: <span>{data?.name}</span>
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  className={styles.liveDemo}
                  href={data?.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit: {data?.liveDemo}
                </a>
                <p>Build Date: {data?.buildDate}</p>
              </div>
              <Button
                onClick={addReactToPost}
                type="button"
                className="app_btn"
                style={{
                  marginTop: "1em",
                  cursor: "pointer",
                }}
              >
                Like
              </Button>
              <div className={styles.like_commnet}>
                <p>
                  Like: <span>{like?.length}</span>
                </p>
                <p>
                  Comment: <span>{comment?.length}</span>
                </p>
              </div>
              <div className={styles.description}>
                <p>{data?.description}</p>
              </div>
              {/* Share  */}
              <div className={styles.social}>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} />
                </LinkedinShareButton>
                <RedditShareButton url={shareUrl}>
                  <RedditIcon size={40} />
                </RedditShareButton>
                <TelegramShareButton url={shareUrl}>
                  <TelegramIcon size={40} />
                </TelegramShareButton>
              </div>
              {/* All COmment */}
              {/* Comment Area */}
              <div className={styles.comment}>
                <form onSubmit={addCommentToPost}>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name="comment"
                    id=""
                    cols={30}
                    rows={30}
                  ></textarea>
                  <Button type="submit" className="app_btn">
                    Submit
                  </Button>
                </form>
              </div>
              <div className={styles.comment_main}>
                {comment &&
                  comment?.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PortfolioDetails;
