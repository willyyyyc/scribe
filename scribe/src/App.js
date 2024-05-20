import BodyContainer from './components/body_container.js';
import MainTitle from './components/main_title.js';
import InfoBox from './components/info_box.js';
import ContentContainer from './components/content_container.js';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-indigo-500 to-indigo-900 flex flex-col justify-center'>
        <BodyContainer>
          <MainTitle title={'SCRIBE'} text={'SPEND LESS TIME WORYING ABOUT YOUR NOTES.'}></MainTitle>
          <InfoBox title={'COLLECTIONS'} 
                   text1={'Here you can view all of your Groups'} 
                   text2={'Select a group to view, edit, or create new Notes'}
                   text3={'You can also create new Groups, or delete existing ones'}>
                   </InfoBox>
          <ContentContainer></ContentContainer>
        </BodyContainer>
        
    </div>
  );
}

export default App;
