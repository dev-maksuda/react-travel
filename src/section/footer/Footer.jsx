import React from 'react'
import "../footer/footer.css"
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaHeartBroken } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const footer = () => {
  return (
      <footer>
      <div class="container">
        <div class="footer_wrapper">
          <div class="footer_item">
            <h3 class="footer_title">QUICK LINKS</h3>
            <ul class="footer_link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer_item">
            <h3 class="footer_title">LEGAL STUFF</h3>
            <ul class="footer_link">
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Security Policy</a>
              </li>
              <li>
                <a href="#">Money Back Guarantee</a>
              </li>
            </ul>
          </div>
          <div class="footer_item">
            <h3 class="footer_title">OUR TEAM</h3>
            <ul class="footer_link">
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Afﬁliates</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
            </ul>
          </div>
          <div class="footer_item">
            <h3 class="footer_title">FEATURED SERVICES</h3>
            <ul class="footer_link">
              <li>
                <a href="#">Local SEO</a>
              </li>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
              <li>
                <a href="#">Marketing Management</a>
              </li>
              <li>
                <a href="#">Search Engine Optimization</a>
              </li>
              <li>
                <a href="#">Free SEO Analysiss</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="copyright_wrapper">
            <p class="paragraph">Copyright 2023-2026 example.com</p>
            <div class="footer_social_links">
              <a href="#" class="nav_action_item">
                 <FaMessage />
              </a>
              <div class="nav_action_item">
                 <FaLocationArrow />
              </div>
              <div class="nav_action_item">
                 <FaHeartBroken />
              </div>
              <div class="nav_action_item">
                <FaPlus />
              </div>
            </div>
            <p class="paragraph">
              Terms of service Privacy policy ookie policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer