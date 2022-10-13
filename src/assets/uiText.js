import {faker} from '@faker-js/faker';

export const INTRO_CAROUSEL_DATA = [
  {
    title: "Let's get started",
    desc: 'This tool is designated to help Air Travelers arriving in Canada have a better border experience by completing their Advance Declaration',
    imgUri: faker.image.transport(),
  },
  {
    title: 'Finish as you go',
    desc: 'Traveler can store Traveler document information for this and future trips, and prepare their declaration up to 72 hours ahead of arrival',
    imgUri: faker.image.transport(),
  },
  {
    title: 'Submit your form',
    desc: 'To submit your form, you need to enter your travel information, along with answering our Advance declaration questionnaire',
    imgUri: faker.image.transport(),
  },
];
