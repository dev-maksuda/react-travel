import React from 'react';
import './package.css'; 

const PackageSection = () => {
  const packagesData = [
    {
      id: 1,
      name: 'STARTER',
      price: '$9',
      features: [
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: false },
        { text: 'International Air Ticket.', active: false },
      ],
    },
    {
      id: 2,
      name: 'STANDARD',
      price: '$199',
      features: [
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: false },
        { text: 'International Air Ticket.', active: false },
      ],
    },
    {
      id: 3,
      name: 'PREMIUM',
      price: '$499',
      features: [
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: true },
        { text: 'International Air Ticket.', active: false },
        { text: 'International Air Ticket.', active: false },
      ],
    },
  ];

  return (
    <section id="Package">
      <div className="package_shape">
        <img src="./images/packageshape.png" alt="package shape" />
      </div>

      <div className="container">
        <div className="package_title">
          <h2 className="sec_title">Special Package</h2>
          <p className="peragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        <div className="package_wrapper">
          {packagesData.map((item) => (
            <div className="package_item" key={item.id}>
              <div className="package_item_inner">
                <h3 className="sec_title">{item.name}</h3>
                <h3 className="sec_title price">{item.price}</h3>
                <h5>Per Month</h5>
                
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <i className={`fa-solid fa-circle-check ${!feature.active ? 'disable' : ''}`}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="Package_btn">
                  get started
                </a>
              </div>
              <p className="peragraph trial">4 Days Trial Available</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
