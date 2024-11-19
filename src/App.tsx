import s from "./style.module.css";
import "./global.css";
import { TVShow, TVShowAPI } from "./api/tv-shows";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./TVShowDetail/TVShowDetail";
import { Logo } from "./Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowList } from "./TVShowList/TVShowList";
import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState<TVShow>();
  const [recommendations, setRecommendations] = useState<TVShow[]>([]);

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    console.log(populars);
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  async function fetchRecommendations(tvShowId: number) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
      setRecommendations(recommendations.slice(0, 10));
    }
  }

  async function searchTvShow(title: string) {
    const searchResponse = await TVShowAPI.fetchByTitle(title);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  return (
    <div
      className={s.container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title={"Watowatch"}
              subtitle={"Find a show you may like"}
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <SearchBar onSubmit={searchTvShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendations && (
          <TVShowList
            tvShowList={recommendations}
            onItemClick={setCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
