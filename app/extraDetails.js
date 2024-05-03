"use client";
import React, { useEffect } from "react";
import Bowser from "bowser";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "@/lib/reducers/reducer";
import { useRouter } from "next/navigation";
import { useApiCallMutation } from "@/lib/services/apiCallServices";
import apiEndPointsConfig from "@/lib/config/apiEndPoints";

const ExtraDetails = () => {
  const formData = useSelector((state) => state?.form?.formData);
  const dispatch = useDispatch();
  const router = useRouter();
  const getQueryParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  };
  const currentPath = router.pathname;

  const extraDetails = async () => {
    // const ip = await GetIPAddress();
    const browser = Bowser.getParser(navigator.userAgent);
    let position = null;
    try {
      position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    } catch (error) {}
    dispatch(
      setFormData({
        extras: {
          ...formData.extras,
          browser:
            browser?.parsedResult.browser.name +
            " " +
            browser?.parsedResult.browser.version,
          operatingSystem: browser?.parsedResult.os.name,
          //   ipAddress: ip,
          userAgent: "",
          location: "",
          timestamp: position?.timestamp,
        },
      })
    );
  };

  const set_utm = () => {
    const utm_id = getQueryParam("utm_id");
    const utm_url = getQueryParam("utm_url");
    const utm_source = getQueryParam("utm_source");
    const utm_medium = getQueryParam("utm_medium");
    const utm_campaign = getQueryParam("utm_campaign");
    const utm_term = getQueryParam("utm_term");
    const utm_content = getQueryParam("utm_content");

    //setting utms in cookies
    const utmsData = Cookies.get("utms");
    if (!utmsData) {
      Cookies.set(
        "utms",
        JSON.stringify({
          id: utm_id,
          url: utm_url,
          source: utm_source,
          medium: utm_medium,
          campaign: utm_campaign,
          term: utm_term,
          content: utm_content,
          clickId: "",
        }),
        { expires: 30 }
      );
    } else if (utmsData && utm_source !== null) {
      Cookies.set(
        "utms",
        JSON.stringify({
          id: utm_id,
          url: utm_url,
          source: utm_source,
          medium: utm_medium,
          campaign: utm_campaign,
          term: utm_term,
          content: utm_content,
          clickId: "",
        }),
        { expires: 30 }
      );
    }
    const postUtmsData = JSON.parse(Cookies.get("utms"));
    dispatch(
      setFormData({
        utm: {
          id: postUtmsData.id || utm_id,
          url: postUtmsData.url || utm_url,
          source: postUtmsData.source || utm_source,
          medium: postUtmsData.medium || utm_medium,
          campaign: postUtmsData.campaign || utm_campaign,
          term: postUtmsData.term || utm_term,
          content: postUtmsData.content || utm_content,
          clickId: "",
        },
      })
    );
  };

  //annonymous Api Call
  const [annonymousApi, annonymousApiData] = useApiCallMutation();
  const getAnonymousUserId = async () => {
    // const ip = await GetIPAddress();
    const postUtmsData = JSON.parse(Cookies.get("utms"));
    const utm_id = getQueryParam("utm_id");
    const utm_url = getQueryParam("utm_url");
    const utm_source = getQueryParam("utm_source");
    const utm_medium = getQueryParam("utm_medium");
    const utm_campaign = getQueryParam("utm_campaign");
    const utm_term = getQueryParam("utm_term");
    const utm_content = getQueryParam("utm_content");

    const browser = Bowser.getParser(navigator.userAgent);
    var position = "";

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        position = pos;
      },
      (err) => {
        console.log(`Error getting location: ${err.message}`);
      }
    );
    const data = {
      utm: {
        id: postUtmsData.id || utm_id,
        url: postUtmsData.url || utm_url,
        source: postUtmsData.source || utm_source,
        medium: postUtmsData.medium || utm_medium,
        campaign: postUtmsData.campaign || utm_campaign,
        term: postUtmsData.term || utm_term,
        content: postUtmsData.content || utm_content,
        clickId: "",
      },
      extra: {
        browser:
          browser?.parsedResult.browser.name +
          " " +
          browser?.parsedResult.browser.version,
        operatingSystem: browser?.parsedResult.os.name,
        // ipAddress: ip,
        timestamp: "",
        userAgent: "",
        location: position?.timestamp,
      },
      path: currentPath,
    };
    annonymousApi({
      endPoint: apiEndPointsConfig?.anonymousUser,
      method: "POST",
      data: { data },
    });
  };

  useEffect(() => {
    if (annonymousApiData?.isSuccess) {
      sessionStorage.setItem(
        "anonymousId",
        annonymousApiData?.data?.data?.anonymousId
      );
    }
  }, []);

  useEffect(() => {
    const anonymousId = sessionStorage.getItem("anonymousId");
    extraDetails();
    set_utm();
    if (!anonymousId) {
      getAnonymousUserId();
    }
  }, []);

  return <></>;
};

export default ExtraDetails;
