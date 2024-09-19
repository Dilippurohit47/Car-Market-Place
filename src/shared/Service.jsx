import axios from "axios";

const FormatResult = (resp) => {
  let result = [];
  let finalResult = [];
  resp.forEach((item) => {
    const listingId = item.carListing?.id;

    if (!result[listingId]) {
      result[listingId] = {
        car: item?.carListing,
        images: [],
      };
    }
    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });

  result.forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });

  return finalResult;
};

const sendBirdId = import.meta.env.VITE_SENDBIRD_ID;
const sendBirdToken = import.meta.env.VITE_SENDBIRD_APIKEY;

const createSendBirdUser = (userId, nickName, profileUrl) => {
  try {
    return axios.post(
      "POST https://api-" + sendBirdId + ".sendbird.com/v3/users",
      {
        user_id: userId,
        nickname: nickName,
        profile_url: profileUrl,
        issue_access_token: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-token": sendBirdToken,
        },
      }
    );
    s;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const createSendBirdChannel = (users, title) => {
  console.log("creted", users, title);
  return axios.post(
    `https://api-${sendBirdId}.sendbird.com/v3/group_channels`,
    {
      user_ids: users,
      is_distinct: true,
      name: title,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-token": sendBirdToken,
      },
    }
  );
};

export default {
  FormatResult,
  createSendBirdUser,
  createSendBirdChannel,
};
