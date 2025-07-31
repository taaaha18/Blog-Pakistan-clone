
import React from "react";
import "./CSS/heroSection.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Heading from "./Heading";
import { HorizontalCard, HorizontalCardGrid } from './SmallCard';
import Button from './Button'; 
import { PriceCard, PriceCardContainer } from './Price_card';
import Footer from "./footer";
import B_Card from './BlogFunc';

    const cardData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitf1oA-ibfem7UDXgigWaNzqRIMmABmxxKg&s',
    title: 'Daraz',
    description: 'List of Daraz Top 10 Selling Products In 2024',
    onClick: () => console.log('Article 1 clicked'),
  },
  {
    image: 'https://thumbs.dreamstime.com/b/victory-mine-715553.jpg',
    title: 'Natasha Case',
    description: 'Natasha walked away free after paying 5 crores ‘diyat’ and a job for a family member.',
    onClick: () => console.log('Article 2 clicked'),
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTClrbiOIHR8u4ZVXwqOKIM8TBdBaxpoz0tA&s',
    title: 'Parenting Approch',
    description: 'Which parenting approach do you lean toward—traditional or modern?',
    onClick: () => console.log('Article 3 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/09/CM-Maryam-Nawaz-launches-the-School-Nutrition-program.jpg',
    title: 'Nutrition Program',
    description: 'CM Maryam Nawaz launches the ‘School Nutrition’ program.',
    onClick: () => console.log('Article 4 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/08/Top-10-Japanese-Cars-Under-40-Lakhs-In-Pakistan.jpg',
    title: 'Japenese Cars',
    description: 'Top 10 Japanese Cars Under 40 Lakhs In Pakistan',
    onClick: () => console.log('Article 2 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/09/Top-10-Best-Apps-For-Photo-Editing-In-2024.jpg',
    title: 'Apps for Photo Editing',
    description: 'Top 10 Best Apps For Photo Editing In 2024',
    onClick: () => console.log('Article 3 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/06/Best-Cars-Under-20-Lakhs-In-2024-1.jpg',
    title: 'Under 20 Lakhs',
    description: 'List of the Best Cars Under 20 Lakhs – Prices & Specs',
    onClick: () => console.log('Article 3 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/Honda-125-Price-in-Pakistan-2024.jpg',
    title: 'CG 125',
    description: 'Honda 125 Price in Pakistan 2024',
    onClick: () => console.log('Article 4 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/Omoda-E5-Electric-Car-and-Jaecoo-J7-Hybrid-%E2%80%93-Pricing-Details-for-the-Pakistani-Market.jpg',
    title: 'Omoda Cars',
    description: 'TOmoda E5 Electric Car and Jaecoo J7 Hybrid – Pricing Details for the Pakistani Market',
    onClick: () => console.log('Article 2 clicked'),
  },
];
 

 {/*/////////////////////////////////////////////////////////*/}
 const cardsData = [
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/08/Top-10-Upcoming-Cars-In-Pakistan-In-2024.jpg',
    title: 'Top 10',
    description: 'Top 10 Upcoming Cars In Pakistan In 2024',
    onClick: () => console.log('Article 1 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/Honda-70-Price-in-Pakistan.jpg',
    title: 'CD 70',
    description: 'Honda CD 70 2024 Price in Pakistan: Features & Specifications',
    onClick: () => console.log('Article 2 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/06/Best-Cars-Under-20-Lakhs-In-2024-1.jpg',
    title: 'Under 20 Lakhs',
    description: 'List of the Best Cars Under 20 Lakhs – Prices & Specs',
    onClick: () => console.log('Article 3 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/Honda-125-Price-in-Pakistan-2024.jpg',
    title: 'CG 125',
    description: 'Honda 125 Price in Pakistan 2024',
    onClick: () => console.log('Article 4 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/Omoda-E5-Electric-Car-and-Jaecoo-J7-Hybrid-%E2%80%93-Pricing-Details-for-the-Pakistani-Market.jpg',
    title: 'Omoda Cars',
    description: 'TOmoda E5 Electric Car and Jaecoo J7 Hybrid – Pricing Details for the Pakistani Market',
    onClick: () => console.log('Article 2 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/Price-of-Mercedes-G-Wagon-in-Pakistan.jpg',
    title: 'G wagon',
    description: 'Price of Mercedes G Wagon in Pakistan',
    onClick: () => console.log('Article 3 clicked'),
  },
   {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/02/Cars-in-Pakistan-Under-5-Lakhs.jpg',
    title: 'Affordable Cars',
    description: 'Affordable Cars Under 5 Lakhs in Pakistan',
    onClick: () => console.log('Article 3 clicked'),
  },
   {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/01/5-best-Honda-Vehicles-in-the-market.jpg',
    title: 'BEST HONDA VEHICLES',
    description: '5 Best Honda Vehicles in the Market',
    onClick: () => console.log('Article 3 clicked'),
  },
   
];

{/*/////////////////////////////////////////////////////////*/}
const cardszData = [
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/09/How-to-earn-from-Shopify-in-Pakistan-Effective-Ways-to-Supercharge-Your-Business.jpg',
    title: 'Shopify Guide',
    description: 'How to earn from Shopify in Pakistan – Effective Ways to Supercharge Your Business',
    onClick: () => console.log('Article 1 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/02/online-earning-in-pakistan.jpg',
    title: 'Online Earning',
    description: 'Top 10 Trusted Online Earning Sites in Pakistan for 2024: Start Earning Without Investment',
    onClick: () => console.log('Article 2 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/09/List-of-Daraz-Top-10-Selling-Products-In-2024.jpg',
    title: '10 selling products',
    description: 'List of Daraz Top 10 Selling Products In 2024',
    onClick: () => console.log('Article 3 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/06/How-To-Earn-From-Facebook-In-Pakistan-In-2024.jpg',
    title: 'Earning',
    description: 'How To Earn From Facebook In Pakistan In 2024',
    onClick: () => console.log('Article 4 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/09/How-To-Start-Shopify-Store-In-Pakistan.jpg',
    title: 'Shopify Store',
    description: 'How To Start a Shopify Store In Pakistan',
    onClick: () => console.log('Article 2 clicked'),
  },
  {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/03/image1.png',
    title: 'Co-working Space',
    description: 'Comence Coworking Space: Where Work Meets Innovation and Community',
    onClick: () => console.log('Article 3 clicked'),
  },
   {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/09/Everything-about-Iphone-16-Pro-Max.jpg',
    title: 'IPhone 16 Pro Max',
    description: 'Everything about IPhone 16 Pro Max 2024',
    onClick: () => console.log('Article 3 clicked'),
  },
   {
    image: 'https://blogpakistan.pk/wp-content/uploads/2024/02/Top-successful-Pakistani-Entrepreneurs-1.jpg',
    title: 'Sucessful Entrepreneurs',
    description: 'Top successful Pakistani Entrepreneurs',
    onClick: () => console.log('Article 3 clicked'),
  },
   
];
const priceCards = [
  {
    title: "USD to PKR",
    mainText: "1 USD =",
    price: "281.96",
    currency: "PKR",
    icon: "dollar"
  },
  {
    title: "Euro to PKR",
    mainText: "1 Euro =",
    price: "305.50",
    currency: "PKR",
    icon: "euro"
  },
  {
    title: "Gold Rate",
    mainText: "10g =",
    price: "145000",
    currency: "PKR",
    icon: "coins",
    priceColor: "#f39c12"
  }
];


const HeroSection = () => {
  return (
    <>
     <section className="hero">
  <Navbar />

  <div className="card-grid">
    <div className="left-card">
      <Card
        image="https://i.tribune.com.pk/media/images/1309164-metrobusx-1485579389/1309164-metrobusx-1485579389.jpg"
        title="Metro Bus"
        description="Faisalabad To Get Metro Bus Service Costing Rs. 70 Billion"
        width="100%"
        height="100%"
      />
    </div>

   
    <div className="right-cards">
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkUAUK2Dtzo-3toU1wf0xCnWYLpk49hIrpg&s"
        title="Eating Dirt"
        description="TikTok Trend Eating ‘dirt’ for health benefit"
        width="100%"
        height="100%"
      />
      <Card
        image="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&h=300&fit=crop"
        title="Oil Reserve"
        description="Massive Oil and Gas Reserve Found"
        width="100%"
        height="100%"
      />
      <Card
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
        title="Shopify Guide"
        description="How to Start a Shopify Store"
        width="100%"
        height="100%"
      />
      <Card
        image="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=500&h=300&fit=crop"
        title="Sehat Card"
        description="Bad News for Sehat Card Holders"
        width="100%"
        height="100%"
      />
    </div>
  </div>
  <div className="align-left">
    <Heading 
      primaryText="Recent" 
        highlightText="Belogs"
        fontSize="22px"
        primaryColor="#000"
        highlightColor=" #2d8659"
        textAlign="left"
        animation={true}
    />
  </div>

  <div className="horizontal-card-grid-container">
          <HorizontalCardGrid cards={cardData} columns={3} gap="20px" />
 </div>

    <div className="buttons">
      <Button text="View All" onClick={() => alert('Button clicked!')} />
  </div>

      <div className="align-left">
    <Heading 
      primaryText="Most" 
        highlightText="Popular"
        fontSize="22px"
        primaryColor="#000"
        highlightColor=" #2d8659"
        textAlign="left"
        animation={true}
    />
  </div>

  <div className="second-cards">
 <Card
        image="https://blogpakistan.pk/wp-content/uploads/2024/09/shadiyana_cover-2048x758.jpg"
        title="Shadyana"
        description="Shadiyana Wedding Bazaar – Your Dream Wedding Awaits."
        width="100%"
        height="100%"
      />
       <Card
        image="https://blogpakistan.pk/wp-content/uploads/2024/06/A-hospital-ward-boy-becomes-a-Hero-by-saving-the-life-of-26-babies-in-Sahiwal.jpg"
        title="Hero"
        description="A hospital ward boy becomes a Hero, by saving the life of 26 babies in Sahiwal"
        width="100%"
        height="100%"
      />
       <Card
        image="https://blogpakistan.pk/wp-content/uploads/2024/06/Maryam-Nawaz-launches-Dastak-App-in-Punjab.jpg"
        title="Dastak App"
        description="Maryam Nawaz launches “Dastak App in Punjab”
"
        width="100%"
        height="100%"
      />
<Card
        image="https://blogpakistan.pk/wp-content/uploads/2024/06/List-of-Major-Bakra-mandi-2024-Islamabad-Lahore-Karachi.jpg"
        title="Bakra Mandi"
        description="List of Bakra Mandi 2024 in Major Cities – Karachi, Islamabad, & Lahore
"
        width="100%"
        height="100%"
      />
       <Card
        image="https://blogpakistan.pk/wp-content/uploads/2023/07/Top-Amusement-Parks-in-Pakistan.jpg"
        title="Amusement Parks"
        description="10 Best Amusement and Theme Parks in Pakistan"
        width="100%"
        height="100%"
      />
       <Card
        image="https://blogpakistan.pk/wp-content/uploads/2023/10/hunza-1.jpg"
        title="Hunza Valley"
        description="The Best Time to Visit Hunza: A Comprehensive Guide"
        width="100%"
        height="100%"
      />

  </div>

   <div className="buttons">
      <Button text="View All" onClick={() => alert('Button clicked!')} />

    </div>

     <div className="align-left">
    <Heading 
      primaryText="Auto Mobile" 
        highlightText=" "
        fontSize="22px"
        primaryColor="#000"
        highlightColor=" #2d8659"
        textAlign="left"
        animation={true}
    />
  </div>

   <div className="t3rd_card">
   <div className="down_left-card">
      <Card
        image="https://blogpakistan.pk/wp-content/uploads/2024/08/Top-10-Japanese-Cars-Under-40-Lakhs-In-Pakistan.jpg"
        title="Japanese Cars"
        description="Top 10 Japanese Cars Under 40 Lakhs In Pakistan"
        width="100%"
        height="100%"
      />
    </div>
        <div className="down_right_cards">
      <HorizontalCardGrid cards={cardsData} columns={2} gap="20px" />
</div>
    </div>
 <div className="buttons">
      <Button text="View All" onClick={() => alert('Button clicked!')} />
  </div>
  
  <div className="IT">
<div className="align-left">
    <Heading 
      primaryText="IT & Tech" 
        highlightText=" "
        fontSize="22px"
        primaryColor="#000"
        highlightColor=" #2d8659"
        textAlign="left"
        animation={true}
    />
  </div>

  <div className="align-right">
    <Heading 
      primaryText="Business" 
        highlightText=" "
        fontSize="22px"
        primaryColor="#000"
        highlightColor=" #2d8659"
        textAlign="left"
        animation={true}
    />
  </div>
    
  </div>

  <div className="IT_cards">
    <div className="left">
       <Card
        image="https://blogpakistan.pk/wp-content/uploads/2021/04/best-payments-gateway-1.jpg"
        title="Tech"
        description="A Detailed List of 12 Online Payment Gateways in Pakistan"
        width="100%"
        height="100%"
      />

    </div>

    <div className="right">
       <Card
        image="https://blogpakistan.pk/wp-content/uploads/2024/02/Online-free-Courses-In-Pakistan-With-Certificate.jpg"
        title="Online Courses"
        description="21 Best Online Earning Apps and Websites in Pakistan"
        width="100%"
        height="100%"
      />
      </div>

  </div>

   <div className="left-card-grid-container">
          <HorizontalCardGrid cards={cardszData} columns={2} gap="20px" />
 </div>
 
<div className="align-left">
    <Heading 
      primaryText="Fashion" 
        highlightText=" "
        fontSize="22px"
        primaryColor="#000"
        highlightColor=" #2d8659"
        textAlign="left"
        animation={true}
    />
  </div>
  

  <div className="blog">
   <B_Card />
   
  </div>

 <div className="buttons">
      <Button text="View All" onClick={() => alert('Button clicked!')} />
  </div>
<div className="pricecard">
<PriceCardContainer cards={priceCards} />

</div>

  <Footer />
</section>

     
     
    </>
  );
};

export default HeroSection;
