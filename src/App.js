import NavbarComponent from "./Components/NavbarComponent";
import SidebarComponent from "./Components/SidebarComponent";
import search from "./assets/search.png"
import './App.css'
import calendar from "./assets/calendar.png"
import ExamData from './data/example_data.json'
import CarouselComponent from './Components/CarouselComponent'
import FilterstoreComponent from "./Components/FilterstoreComponent";


function App() {

 

  return (
    <div className="App">
      <SidebarComponent />
      <NavbarComponent />
      <main>
        <div className="container">
          <div className="hstack gap-3 pt-4 mb-3">
            <div className="place-title">Place List</div>
            <div className="ms-auto d-none d-xxl-block">
              <select className="form-select store-type">
                <option>Restaurant</option>
                <option>Bakery</option>
                <option>Cafe</option>
              </select>
            </div>
            <div className="vr mt-2 d-none d-xxl-block"></div>
            <div className="search d-none d-xxl-block">
              <input type="text" className="search-bar ps-3" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button className="search-btn pe-3 px-3" id="search-addon">
                <img src={search} width="14" height="14" />
              </button>
            </div>
          </div>
          <div className="ms-auto d-block d-xxl-none mb-3">
              <FilterstoreComponent />
          </div>
          <div className="search d-flex d-block d-xxl-none mb-3">
            <input type="text" className="search-bar-mb ps-3" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="justify-content-end">
              <button className="search-btn pe-3 px-3" id="search-addon">
                <img src={search} width="14" height="14" />
              </button>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-xxl-4 g-2 g-lg-3">
            {ExamData.map((examDetail,index) => {
              return <div className="col"  key={index} >
                <div className="p-xxl-3 card-store" >
                  <div className="d-flex justify-content-between align-items-center  mb-2">
                    <div className="img-store">
                      <img src={examDetail.profile_image_url} className="image-store" />
                    </div>
                    <small className="text-muted d-none d-xxl-block">
                      <div className="w-auto">{examDetail.name}</div>
                      <div className="row pt-2 ">
                        <div className="col w-auto d-flex justify-content-start align-items-center">
                          <img src={calendar} width="9px" height="10" className="me-1" />
                          10:00 AM - 6:00 PM
                        </div>
                        <div className="col-1 w-auto d-flex justify-content-end align-items-center"><span className="dot me-1"></span> {examDetail.rating}</div>
                      </div>
                    </small>
                  </div>
                  <div className="row d-block d-xxl-none">
                    <div className="col d-flex justify-content-end">
                      <div className="score-store">
                        {examDetail.rating}
                      </div>
                    </div>
                  </div>
                  <div className="d-block d-xxl-none px-3 mb-3 mt-1" key={index}>
                    <div className="">Cantina Wine Bar & Italian Kitchen</div>
                    <div className="row pt-2 w-auto">
                      <div className="col d-flex justify-content-start align-items-center">
                        <img src={calendar} width="9px" height="10" className="me-1" />
                        10:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="row row-cols-3 d-none d-xxl-block">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex img-food">
                        {examDetail.images.map((image, index) => (
                          <img src={image} className={"image-food" + (index + 1)} key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="row d-block d-xxl-none px-3 pb-3">
                    <CarouselComponent images={examDetail.images} key={examDetail.id}/>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
