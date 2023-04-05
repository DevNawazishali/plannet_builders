import logo from './logo.svg';
import './App.css';
import First_nav from './Components/First_nav/First_nav';
import Navbar from './Components/Navbar/Navbar';
import Principal_Architect from './Components/Principal_Architect/Principal_Architect';
import Senior_designer from './Components/Senior_designer/Senior_designer';
import Footer from './Components/Footer/Footer';
import More_services from './Components/More_services/More_services';

function App() {
  return (
    <div className="App">
      
      <First_nav />
      {/* <Navbar /> */}
      <Principal_Architect img_url='a.png' title="  Principal Architect " name="Ar. Haris Azmat " head="  A young & energetic with nearly 09 years of experience in Design & 
            construction consultancy, Ar. Haris Azmat holds a Bachelor’s Degree in Architecture from 
            Superior University. His Designs & construction services stand tall in several
             cities all over Pakistan. His skills in project 
            management are invaluable in the construction empire.
                    " buton="Contact Mr.Haris"/>


<Senior_designer img="b.png" title="Senior Designer" name="Khurram Shahzad" prha="I’m a Senior Designer & visualizer with experienced
        of 25 Years in Design & construction as well. He has expertise
         in Planning, Working Details & Construction 
       Management & I’m working with that company for more than 05 years." buton="Contact Mr.Khram" />


<Principal_Architect img_url='c.png' title="  3D Visualizer " name="
Zeeshan Shafqat " head="  
My expertise in that company as an 3D Visualizer with the experienced of more than 
15 years in Architectural Firms & I’m here to handle 3D Visualizations & Animations.
                    " buton="Contact Mr.Zeeshan"/>

<Senior_designer title="
Senior Designer" name="Waqas Ali"  img="d.png" prha="
I’m a Senior Designer & visualizer with experienced of 15 Years in Design & construction as well. He has expertise in Planning,
 Working Details & Construction Management & I’m working with that company for more than 05 years."
  buton="Contact Mr.Waqas" />

  
<Principal_Architect img_url='e.png' title="  3D Visualizer & Animator " name="
Muhammad Imran " head="  
My expertise in that company as an 3D Visualizer with the experienced of more than 
15 years in Architectural Firms & I’m here to handle 3D Visualizations & AnimationsI’m here as a 
3D Visualizer & Animator with experience of 13 Years in 3D Visualizer & Animator."
buton="Contact Mr.Imran"/>

<Senior_designer img="f.png" title="
Designer" name="Azeem Ansari
" prha="        

I’m here as a Junior Designer with the experienced of 11 Years in Design & construction as well. 
My expertise’s in Planning & Working Details. I’m working with that company more than 2 years.


 
 rs."
  buton="Contact Mr.Azeem" />


<Principal_Architect img_url='g.png' title="  
Graphic Designer" name="
Tayyab Ali" head="  

I’m here as a Graphic Designer with the experienced of 6 Years in Graphics.
I’m here to manage marketing & advertiser as well as to runs social media platforms.
                    " buton="Contact Mr.Tayyab"/>

<More_services />
      <Footer />  

    </div>
  );
}

export default App;
