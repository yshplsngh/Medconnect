import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProfileStatistics from './ProfileStatistics';
import './index.css'

// SliderPage component
function SliderPage() {
  // Data for different profiles
  const profiles = [
    {
      id: 1,
      name: 'Julie L. Arsenault',
      username: 'Programmer',
      website: 'mdbootstrap.com',
      email: 'julie@example.com',
      speciality: 'Front-end Developer',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
    },
    {
      id: 2,
      name: 'John Doe',
      username: 'Coder',
      website: 'example.com',
      email: 'john@example.com',
      speciality: 'Back-end Developer',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    },
    {
      id: 3,
      name: 'Jane Smith',
      username: 'Designer',
      website: 'designerportfolio.com',
      email: 'jane@example.com',
      speciality: 'UI/UX Designer',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp',
    },
    // Add more profile data objects as needed
  ];
  

  // Settings for the react-slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl ">
      <Slider {...sliderSettings}>
        {profiles.map((profile) => (
            <div key={profile.id}>
            <ProfileStatistics
                name={profile.name}
                speciality={profile.speciality}
                email={profile.email}
                img={profile.image}
            />
            </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage;
