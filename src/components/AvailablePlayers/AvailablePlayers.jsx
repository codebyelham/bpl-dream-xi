import React, { use } from "react";
import userIcon from "../../assets/user.png";
import flagIcon from "../../assets/flag.png";

const AvailablePlayers = ({ playerPromise }) => {
  const playersData = use(playerPromise);
  console.log(playersData);
  return (
    <section className="w-11/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-5">
      {playersData.map((player) => (
        <div className="card shadow-sm p-5">
          <figure>
            <img className="w-[full] h-[400px] object-cover" src={player.player_image} alt={player.player_name} />
          </figure>
          <div className="">
            <div className="flex items-center gap-2 mt-4">
              <img className="w-[20px]" src={userIcon} alt="" />
              <h2 className="card-title">{player.player_name}</h2>
            </div>
            <div className="flex justify-between items-center mt-4 pb-4 border-b border-gray-400">
              <div className="flex items-center gap-2">
                <img src={flagIcon} alt="" /> <p>{player.player_country}</p>
              </div>
              <button className="btn">{player.player_role}</button>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center font-bold">
                <p>Rating</p> <span>{player.rating}</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <p>{player.bating_style}</p> <span>{player.bowling_style}</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <div className="flex items-center gap-1">
                  <p>Price: $</p> <span>{player.price}</span>
                </div>
                <button className="btn">Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AvailablePlayers;
