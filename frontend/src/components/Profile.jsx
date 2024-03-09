import {React,useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const [skillLevel, setSkillLevel] = useState('Beginner');
    const [inilocation,finlocation] = useState({
        longitude:"",
        latitude:""
    })
    const [firlocation,seclocation] = useState("");
    const [ini_auth,fin_auth] = useState({
        FName:"",
        LName:"",
        Email:"",
        Number:""
    })
    const [ini_authSave,fin_authSave]= useState("");
    const [initial,final] = useState({
        CoreSkill:"",
        DOB:"",
        Bio:"",
    })
    const [selectedSports, setSelectedSports] = useState([]);
    const setdata = (event)=>{
        const {name,value} = event.target;
        final((info)=>{
            return{
            ...info,
            [name] : value
            }
        })
    }

      
    const savedata = async(event)=>{
        event.preventDefault();
        try {
        const {CoreSkill,DOB,Bio} = initial;
        const Email = ini_authSave.Email;
        console.log(firlocation);
         if(firlocation === "error" || firlocation === ""){
             console.log("Hello How are you")
             const response = await axios.post(`http://localhost:1234/sportsDetailForm/${id}`,{
                CoreSkill,DOB,Bio,Email,skillLevel,selectedSports
               })
                alert("Successfully Save ...")
                if(response.status = 202){
                 navigate(`/common_dashboard/${id}`);
                }
     }
         else{
            const response = await axios.post(`http://localhost:1234/sportsDetailForm/${id}`,{
                CoreSkill,DOB,Bio,Email,skillLevel,selectedSports,firlocation
               })
                alert("Successfully Save ...")
                if(response.status = 202){
                 navigate(`/dashboard/${id}`);
                }
         }
    } catch (error) {
            alert(error);
            console.log(error);
    }
    }
    
    const getuserprofile = async()=>{
      try {
          let userdata = await axios.get(`http://localhost:1234/user_auth_data/${id}`);
          userdata = userdata.data.userdata;
         fin_auth((info)=>{
          info.FName = userdata.FName;
          info.LName = userdata.LName;
          info.Email = userdata.Email;
          info.Number = userdata.Number;
         })
         fin_authSave(ini_auth);
      } catch (error) {
          console.log(error);
          alert(error);
      }
    }
    const handleSkillChange = (event) => {
        const value = parseInt(event.target.value);
        switch (value) {
            case 1:
                setSkillLevel('Beginner');
                break;
            case 2:
                setSkillLevel('Intermediate');
                break;
            case 3:
                setSkillLevel('Advanced');
                break;
            case 4:
                setSkillLevel('Master');
                break;
            case 5:
                setSkillLevel('Champion');
                break;
            default:
                setSkillLevel('Please Select');
                break;
        }
    };
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        if (selectedSports.includes(value)) {
            setSelectedSports(selectedSports.filter((sport) => sport !== value));
        } else {
            setSelectedSports([...selectedSports, value]);
        }
    };

    // Get My Location
const correct = (position)=>{
	console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    finlocation((info)=>{
        info.latitude = latitude;
        info.longitude = longitude;
    })
    // console.log("latitude "+latitude+"longitude "+longitude);
    seclocation(inilocation);
}

const notcorrect = (error)=>{
    seclocation("error");
    console.log(error.message);
}
const getlocation = (e)=>{
    e.preventDefault();
	const location =	navigator.geolocation.getCurrentPosition(correct,notcorrect);
}
console.log(firlocation);
    useEffect(()=>{
        getuserprofile();
     },[])
  return (
    <>
<div className='profile-div bg-center bg-no-repeat bg-cover w-full h-[100vh] pt-4'>
<section class="max-w-6xl p-6 mx-auto rounded-md shadow-md backdrop-blur-lg">
    <h1 class="text-3xl font-bold  capitalize dark:">Please complete your profile ✌️</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class=" dark:text-gray-200" for="username">Full Name</label>
                <input id="username" type="text" value={ini_authSave.FName+" "+ini_authSave.LName} class="block  w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600  "/>
            </div>

            <div>
                <label class=" dark:text-gray-200" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" value={ini_authSave.Email} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "/>
            </div>

            <div>
                <label class=" dark:text-gray-200" for="password">Phone Number</label>
                <input id="password" type="number" value={ini_authSave.Number} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "/>
            </div>

            <div>
                <label class=" dark:text-gray-200" for="passwordConfirmation">Your Location</label>
                <button onClick={getlocation} name="Location" id="passwordConfirmation" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 ">My current location</button>
            </div>
            <div>
                <label class=" dark:text-gray-200" for="passwordConfirmation">Core Skill</label>
                <select onChange={setdata} name="CoreSkill" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 ">
                <option className='bg-[#111111] ' value="beginner">Cricket</option>
                                            <option className='bg-[#111111]' value="intermediate">Football</option>
                                            <option className='bg-[#111111]' value="advanced">Badminton</option>
                                            <option className='bg-[#111111]' value="master">Chess</option>
                                            <option className='bg-[#111111]' value="champion">Hockey</option>
                </select>
            </div>
            <div className=''>
            <label className="dark:text-gray-200">Other Skills</label>
            <div className='flex gap-x-4'>
                <label className="block">
                    <input  className='mr-1'
                        type="checkbox"
                        value="Cricket"
                        onChange={handleCheckboxChange}
                        checked={selectedSports.includes('Cricket')}
                       
                    />
                    Cricket
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        value="Football"
                        onChange={handleCheckboxChange}
                        checked={selectedSports.includes('Football')}
                        className='mr-1'
                    />
                    Football
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        value="Badminton"
                        onChange={handleCheckboxChange}
                        checked={selectedSports.includes('Badminton')}
                        className='mr-1'
                    />
                    Badminton
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        value="Chess"
                        onChange={handleCheckboxChange}
                        checked={selectedSports.includes('Chess')}
                        className='mr-1'
                    />
                    Chess
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        value="Hockey"
                        onChange={handleCheckboxChange}
                        checked={selectedSports.includes('Hockey')}
                        className='mr-1'
                    />
                    Hockey
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        value="Judo"
                        onChange={handleCheckboxChange}
                        checked={selectedSports.includes('Judo')}
                        className='mr-1'
                    />
                    Judo
                </label>
            </div>
        </div>
            <div>
            <label className="dark:text-gray-200">Core Skill Level: {skillLevel}</label>
            <input
                id="range"
                type="range"
                min={0}
                max={5}
                step={1}
                
                className="block w-full py-2 mt-2 border rounded-md bg-orange-900 "
                onChange={handleSkillChange}
            />
        </div>  
            <div>
                <label class=" dark:text-gray-200">Date of Birth</label>
                <input onChange={setdata} name="DOB" id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "/>
            </div>
            <div>
                <label  class=" dark:text-gray-200" for="passwordConfirmation">Additonal Bio</label>
                <textarea onChange={setdata} name="Bio" onResize={false} id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium ">
                Upload Your Profile Photo
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-transparent rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="text-[15px]">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1 ">or drag and drop</p>
                  </div>
                  <p class="text-xs ">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button onClick={savedata} class="px-6 py-2 leading-5  transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
</div>


 
    </>
  )
}

export default Profile