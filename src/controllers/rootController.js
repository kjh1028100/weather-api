import express from "express";
import fetch from "node-fetch";

const ConfirmCode = 201;

export const home = (req, res) => {
  return res.status(ConfirmCode).render("home", { pageTitle: `Todo App` });
};

export const postWeather = async (req, res) => {
  const {
    body: { lat, lon },
  } = req;
  const weatherJson = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric`
    )
  ).json();
  return res.status(ConfirmCode).json(weatherJson);
};
