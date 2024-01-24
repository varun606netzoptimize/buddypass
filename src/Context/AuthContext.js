/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {Buddypass_Base_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {
  const [authToken, setAuthToken] = useState(null);
  const [myUserDetails, setMyUserDetails] = useState(null);
  const [discoverTrips, setDiscoverTrips] = useState(null);
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    if (authToken !== null) {
      const UserDetails = () => {
        const userDetailsURL = `${Buddypass_Base_URL}/v1/app/user`;

        axios
          .get(userDetailsURL, {
            headers: {
              Authorization: 'Bearer ' + authToken,
            },
          })

          .then(res => {
            let myUserInfo = res.data;
            setMyUserDetails(myUserInfo.data);
          })
          .catch(error => {
            console.log('error', error.response.data);
          });
      };

      UserDetails();
      DiscoverTripsFN();
      newsAPI();
    }

    isLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  const isLoggedIn = async () => {
    try {
      let loginToken = await AsyncStorage.getItem('authToken');
      if (loginToken) {
        setAuthToken(loginToken);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  const LogOut = async () => {
    await AsyncStorage.removeItem('authToken').then(() => {
      setMyUserDetails(null);
      setAuthToken(null);
    });
  };

  const DiscoverTripsFN = () => {
    const url = `${Buddypass_Base_URL}/v1/app/trip_creation/get/OthersTrips`;

    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      })
      .then(res => {
        setDiscoverTrips(res.data.data.trips);
      })
      .catch(err => {
        console.log('failed to get discover trips', err);
      });
  };

  const newsAPI = () => {
    const newsURL = `https://newsdata.io/api/1/news?apikey=pub_15994299433bbf41ffdebb638cb36c0338506&language=en`;

    axios
      .get(newsURL)
      .then(res => {
        const formattedNewsData = res.data.results.map((result, index) => ({
          id: index + 1,
          title: result.title,
          image: result.image_url,
          date: new Date(result.pubDate).toLocaleDateString(),
          description: result.description,
          link: result.link,
        }));
        setNewsData(formattedNewsData);
      })
      .catch(err => {
        console.log('failed to get news', err);

        setNewsData([
          {
            id: 1,
            title: 'Six unique and unexpected finds in SLO CAL, California',
            image:
              'https://www.travelinusa.us/wp-content/uploads/sites/3/2013/03/top-ten-california.jpg',
            date: 'Jan 25, 2023',
            description:
              'Whilst SLO CAL (San Luis Obispo County, California) is renowned for being a friendly, laid-back destination home to quaint coastal towns, renowned farmers markets and award-winning wine regions, there are a host of activities and experiences that will put SLO CAL to the top of your list for a unique and unforgettable trip. These off-the-beaten-track attractions will leave you wanting to delve deeper into what this destination has to offer from surfing with goats to visiting an architectural graveyard, expect the unexpected.',
            link: 'https://www.traveldailymedia.com/six-unique-and-unexpected-finds-in-slo-cal-california-1/',
          },
          {
            id: 2,
            title:
              'The Tourism Authority of Thailand (TAT) has announced that Thailand continues to welcome all international tourists.',
            image:
              'https://cdn-aedlj.nitrocdn.com/TXGnHSzgVtmHZyFcCTmqtXBgbiQqZwCm/assets/static/optimized/rev-e77a2e4/wp-content/uploads/2021/10/thailand-travel-restrictions-updates.jpg',
            date: 'Jan 09, 2023',
            description:
              'The Tourism Authority of Thailand (TAT) has announced that Thailand continues to welcome all international tourists under the fully-reopen-to-tourism policy that was introduced on 1 October 2022. Thailands Deputy Prime Minister and Minister of Public Health, said International travelers arriving in Thailand are not required to show proof of vaccination.',
            link: 'https://www.thaiembassy.com/travel-to-thailand/thailand-travel-restrictions',
          },
          {
            id: 3,
            title: 'Six unique and unexpected finds in SLO CAL, California',
            image:
              'https://www.travelinusa.us/wp-content/uploads/sites/3/2013/03/top-ten-california.jpg',
            date: 'Jan 25, 2023',
            description:
              'Whilst SLO CAL (San Luis Obispo County, California) is renowned for being a friendly, laid-back destination home to quaint coastal towns, renowned farmers markets and award-winning wine regions, there are a host of activities and experiences that will put SLO CAL to the top of your list for a unique and unforgettable trip. These off-the-beaten-track attractions will leave you wanting to delve deeper into what this destination has to offer from surfing with goats to visiting an architectural graveyard, expect the unexpected.',
            link: 'https://www.traveldailymedia.com/six-unique-and-unexpected-finds-in-slo-cal-california-1/',
          },
        ]);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        myUserDetails,
        LogOut,
        discoverTrips,
        DiscoverTripsFN,
        newsData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
