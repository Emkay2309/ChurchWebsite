import Card from "./components/Card";
import Footer from "./components/Footer";
import Shadow from "./components/Shadow";

export default function Home() {
  const data = [
    {
      id: 1,
      title: "Init Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut nobis iusto quasi officiis qui necessitatibus repellendus magnam magni voluptatem modi, quos, corrupti, mollitia corporis. Voluptatibus nesciunt quae quo velit.",
    },
    {
      id: 2,
      title: "2nd Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut nobis iusto quasi officiis qui necessitatibus repellendus magnam magni voluptatem modi, quos, corrupti, mollitia corporis. Voluptatibus nesciunt quae quo velit.",
    },
    {
      id: 3,
      title: "3rd Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut nobis iusto quasi officiis qui necessitatibus repellendus magnam magni voluptatem modi, quos, corrupti, mollitia corporis. Voluptatibus nesciunt quae quo velit.",
    },
    {
      id: 4,
      title: "final Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut nobis iusto quasi officiis qui necessitatibus repellendus magnam magni voluptatem modi, quos, corrupti, mollitia corporis. Voluptatibus nesciunt quae quo velit.",
    },
  ];
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen ">
        <iframe
          className="w-screen aspect-video"
          src="https://www.youtube.com/embed/d3K5FvWE6BQ?autoplay=1&loop=1&playlist=d3K5FvWE6BQ&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&mute=1"
          title="YouTube video player"
          id="video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Comment the above and uncomment below */}
        {/* <video
          src="https://passioncitychurch.com/wp-content/uploads/2023/03/GlobalPageBroll_V2.mp4"
          loop
          muted
          preload="metadata"
          autoPlay
        >
          Your browser does not support the video tag.
        </video> */}
        <div className="px-14 mt-20 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              footer={item.id}
            />
          ))}
        </div>
        <div>
          <Shadow>{"Loading..."}</Shadow>
        </div>
        <div className="flex p-6 my-6 mt-20 gap-2 px-14">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              footer={item.id}
            />
          ))}
        </div>
        {/* </div> */}
        <Footer />
      </main>
    </>
  );
}

{
  /* <video
      src="https://passioncitychurch.com/wp-content/uploads/2023/03/GlobalPageBroll_V2.mp4">

      </video> */
}

{
  /* <iframe 
      title=""
      className='w-screen aspect-video'
      allow=" autoplay; encrypted-media; picture-in-picture; web-share"
      // src="https://www.youtube.com/embed/d3K5FvWE6BQ?autoplay=1&loop=1&playlist=d3K5FvWE6BQ&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3"
      src={"https://passioncitychurch.com/wp-content/uploads/2023/03/GlobalPageBroll_V2.mp4"}
    />  */
}
{
  /* Working Video */
}
{
  /* https://passioncitychurch.com/wp-content/uploads/2023/03/GlobalPageBroll_V2.mp4 */
}
{
  /* https://www.youtube.com/embed/d3K5FvWE6BQ&ab_channel=Monument */
}
{
  /* https://passioncitychurch.com/wp-content/uploads/2023/03/GlobalPageBroll_V2.mp4 */
}
