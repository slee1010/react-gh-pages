import React from "react";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">{t('welcome')}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;