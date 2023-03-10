import { MeetTeamCard } from '../feature/MeetTeamCard'
import { MeetTeamCardTitle } from '../feature/MeetTeamCardTitle'

const MeetTeam = () => (
  <MeetTeamCardTitle
    title={'Meet The Team'}
  >
  <div className='flex'>
  <MeetTeamCard
    title={'Alan'}
      description={
        'Hi! I\'m Alan, a junior at the Pingry School. I\'m the UX/UI and full-stack programmer for BloodBud\'s website and the head of finance; I\'m responsible for everything you see on the website, and I also manage our company budget and work to cut production costs.'}
    image="/assets/images/alan.png"
    imageAlt=""
    linkedin="https://www.linkedin.com/in/azhong248/"
    />
  <MeetTeamCard
    title={'Matthew'}
    description={'Hello! My name is Matthew, and I\'m a sophomore at Woodbridge High School. I\'m the team captain for BloodBud, which means I\'m in charge of designing and improving the current BloodBud technology, ranging from the smartphone microscope attachment to the deep learning algorithm. '}
    image="/assets/images/matthew.png"
    imageAlt=""
    linkedin="https://www.linkedin.com/in/mmatthewchang/"
    />
  <MeetTeamCard
    title={'Sanjay'}
    description={'Hi! I\'m Sanjay, and I\'m a senior at Foothill High School. At BloodBud, I\'m the mobile application developer and the head of marketing; this entails designing our mobile app, coordinating investor communications, and spearheading marketing initiatives.'}
    image="/assets/images/sanjay.png"
    imageAlt=""
    linkedin="https://www.linkedin.com/in/sanjayadhikesaven/"
    />
    </div>
  </MeetTeamCardTitle>
);

export { MeetTeam };
