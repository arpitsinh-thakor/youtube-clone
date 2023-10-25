import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { json } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {


    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const[showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispath = useDispatch();
    const toogleMenuHandler = ()=>{
        dispath(toogleMenu());
    };

    useEffect(()=>{
        const timer = setTimeout(() => getSearchSuggestions(), 200);

        return ()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }else{
                getSearchSuggestions()
            }
            clearTimeout(timer);
        }

    }, [searchQuery]);

    const getSearchSuggestions = async() =>{
        // console.log(searchQuery);    
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
        dispath(cacheResults({
            [searchQuery]: json[1]
        }));
    }

    return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
        <div className="flex col-span-2">
            <img
                onClick={()=>toogleMenuHandler()}
                className="h-14 cursor-pointer"
                src="https://th.bing.com/th/id/OIP.rWiz8lOnmCScRt2z7PgsewHaHa?pid=ImgDet&w=512&h=512&rs=1"
                alt="menu" />
            <img
                className="h-14 mx-2"
                src="https://th.bing.com/th/id/R.b268bbd77228e1d556fed82ea06aefc3?rik=lnwqAJAlpRh6Fw&riu=http%3a%2f%2fvegawarestudios.com%2fwp-content%2fuploads%2f2020%2f05%2fpng-transparent-youtube-logo-youtube-play-button-computer-icons-youtube-icon-angle-rectangle-desktop-wallpaper.png&ehk=pLBaZdd9XX6YCsvFGxWJjfrFcs8tqKE0uO1NqMpYM%2fQ%3d&risl=&pid=ImgRaw&r=0"
                alt="YT logo" />
        </div>
        <div className="col-span-8 self-center">
            <div>
                <input
                    className="w-1/2 border border-black rounded-l-full p-2 m-2"
                    type="text"
                    value= {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    />
                <button
                    className="border border-black rounded-r-full p-2 bg-gray-200"
                >🔎</button>

                {
                    showSuggestions && (
                        <div className="fixed w-1/3 bg-white rounded-lg border border-gray-200">
                            <ul className="p-2 m-2">
                                {
                                    suggestions.map(suggestion => (
                                        <li key={suggestion} className="shadow-sm hover:bg-gray-400">
                                            🔎 {suggestion}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
        <div className="col-span-2">
            <img
                className="h-14"
                src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                alt="user logo" />
        </div>
    </div>
)};

export default Head;