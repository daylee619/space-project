import { Carousel } from "antd"

// portal 창에 있는 carousel

export default function MainLookBookDetailCarousel(props) {
  //   console.log(data)

  return (
    <div style={{ width: "40%", padding: "20px" }}>
      {props.data?.map((el, index) => (
        <Carousel
          key={index}
          autoplay
          style={{ width: "100%" }}
        >
          <div key={el.lookbookId}>
            <img
              src={el.thumbnail}
              style={{ width: "100%", height: "600px" }}
            />
          </div>
          {el.images.map((image, idx) => (
            <div key={image.idx}>
              <img
                src={image}
                style={{ width: "100%", height: "600px" }}
                key={image.idx}
              />
            </div>
          ))}
        </Carousel>
      ))}
    </div>
  )
}

const contentStyle = {
  width: "50%",
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
}
