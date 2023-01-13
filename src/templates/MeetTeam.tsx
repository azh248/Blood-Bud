import { MeetTeamCard } from '../feature/MeetTeamCard'
import { MeetTeamCardTitle } from '../feature/MeetTeamCardTitle'

const MeetTeam = () => (
  <MeetTeamCardTitle
    title={'Meet The Team'}
  >
  <MeetTeamCard
    title={'Alan'}
      description={
        'Hi! I\'m Alan, a junior at the Pingry School. At BloodBud, I design our user interface and work on integrating the website with our tools. I\'m excited to show what we\'ve been working on!'}
    image="/assets/images/alan.png"
    imageAlt=""
    />
  <MeetTeamCard
    title={'Matthew'}
    description={'Hi!'}
    image="/assets/images/matthew.jpeg"
    imageAlt=""
    />
  <MeetTeamCard
    title={'Sanjay'}
    description={'Hi!'}
    image="/assets/images/sanjay.jpeg"
    imageAlt=""
    />
  </MeetTeamCardTitle>
);

export { MeetTeam };
