import{ Carousel,HomePageCard,CarouselCategory,CarouselProduct} from "./"

const HomePage = () => {
  return (
    <div className="bg-amazoneclone-background">
     <div className="min-w-[1001px] max-w-[1500px] m-auto">
  <Carousel />
    <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
      <HomePageCard title={"We have a suprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"} />
      <HomePageCard title={"Watch The Ring of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start Streaming now"} />
        <HomePageCard title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"} />
        <HomePageCard title={"Deals for you on top brands"}
            img={"../images/home_grid_9.jpg"}
            link={"See all deals"} />
      
       <HomePageCard  title={"Deals for you on top brands"}
            img={"../images/home_grid_10.jpg"}
            link={"See all deals"} />


        <HomePageCard title={"More title to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse kindle Unlimited"} />
        <HomePageCard title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"} />
        <HomePageCard title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See more deals"} />
        <HomePageCard title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"} />
        <HomePageCard title={"Explore More With Apple"}
            img ={"../images/home_grid_11.jpg"}
            link={"See more"} />
        <HomePageCard title={"Smart Watches : Track Your Fitness"}
            img={"../images/home_grid_12.jpg"}
            link={"Save up to 70% "} />

        <HomePageCard title={"Family plan:3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"} />
        <div className="m-3 pt-8">
               <img className="xl:hidden" src={"../images/banner_image_2.jpg"}/>
        </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px] ">
            <img className="h-[200px] m-auto" src={"../images/banner_image.jpg"} />
        </div>
     </div>
     </div>
  )
}

export default HomePage
