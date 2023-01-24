import Carousel from "react-bootstrap/Carousel"

function CarouselFadeExample() {
  return (
    <Carousel
      fade
      style={{ margin: "0px 30px" }}
    >
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/12/17/06/33/new-years-day-7661095_1280.jpg
          "
          alt="First slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
            objectFit: "cover",
            height: "200px",
          }}
        />
        <Carousel.Caption>
          <div style={{ padding: "10px", display: "flex" }}>
            <p style={{ fontSize: "25px" }}>
              계묘년, Space와 함께하는 해피설날!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Second slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
          }}
        />

        <Carousel.Caption>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "150px",
              marginRight: "450px",
            }}
          >
            <p style={{ fontSize: "25px" }}>
              도시에서 이동을 함께하는 라이프웨어
            </p>
            <p style={{ fontSize: "20px" }}>INTERCITY TRAVEL</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80
          "
          alt="Third slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
          }}
        />

        <Carousel.Caption>
          <h3>PUFFER UNIVERSE</h3>
          <p>당신을 위해 존재하는 세상의 모든 따뜻함</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Third slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
          }}
        />

        <Carousel.Caption>
          <div style={{ marginBottom: "150px" }}>
            <h3 style={{ fontSize: "35px" }}>WARMTECK</h3>
            <p style={{ fontSize: "20px" }}>마음까지 따뜻해지는 기술, 웜테크</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80
          "
          alt="Third slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
          }}
        />

        <Carousel.Caption>
          <div
            style={{
              marginBottom: "250px",
            }}
          >
            <div>
              <p style={{ fontSize: "20px" }}>행복한 연말 event </p>
              <p style={{ fontWeight: "bold" }}>1.19 ~ 1.29 </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2021/10/03/04/21/woman-6676901_1280.jpg
          "
          alt="Third slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
          }}
        />

        <Carousel.Caption>
          <div
            style={{
              marginRight: "500px",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontSize: "30px" }}>USUAL FORMAL DAYS</p>
            <p style={{ fontSize: "20px" }}>일상을 담은 편안한 포멀</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/11/23/03/17/christmas-2971961_1280.jpg
          "
          alt="Third slide"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "500px",
          }}
        />

        <Carousel.Caption>
          <div
            style={{
              marginLeft: "450px",
              marginBottom: "230px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <p style={{ fontSize: "30px" }}>WARM BREEZE SWEATER</p>
            <p style={{ fontSize: "20px" }}>
              계절을 채우는 햇살과 바람을 입은 스웨터
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselFadeExample
