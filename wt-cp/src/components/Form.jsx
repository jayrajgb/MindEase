import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div>
      <div className="form-container">
        <form action="">
          <div className="question">
            <p id='question1' className='para'>1) Anxiety/Fear: Talking to someone on your phone in public?</p>
            <div className="answer">
              <label htmlFor="question1">
                <input type="radio" name="question1"/> None
              </label>
              <label htmlFor="question1">
                <input type="radio" name="question1"/> Mild
              </label>
              <label htmlFor="question1">
                <input type="radio" name="question1"/> Moderate
              </label>
              <label htmlFor="question1">
                <input type="radio" name="question1"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question2' className='para'>2) Avoidance: Talking to someone on your phone in public?</p>
            <div className="answer">
              <label htmlFor="question2">
                <input type="radio" name="question2"/> Never
              </label>
              <label htmlFor="question2">
                <input type="radio" name="question2"/> Occasionally
              </label>
              <label htmlFor="question2">
                <input type="radio" name="question2"/> Often
              </label>
              <label htmlFor="question2">
                <input type="radio" name="question2"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question3' className='para'>3) Anxiety/Fear: Eating in public places?</p>
            <div className="answer">
              <label htmlFor="question3">
                <input type="radio" name="question3"/> None
              </label>
              <label htmlFor="question3">
                <input type="radio" name="question3"/> Mild
              </label>
              <label htmlFor="question3">
                <input type="radio" name="question3"/> Moderate
              </label>
              <label htmlFor="question3">
                <input type="radio" name="question3"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question4' className='para'>4) Avoidance: Eating in public places?</p>
            <div className="answer">
              <label htmlFor="question4">
                <input type="radio" name="question4"/> Never
              </label>
              <label htmlFor="question4">
                <input type="radio" name="question4"/> Occasionally
              </label>
              <label htmlFor="question4">
                <input type="radio" name="question4"/> Often
              </label>
              <label htmlFor="question4">
                <input type="radio" name="question4"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question5' className='para'>5) Anxiety/Fear: Interacting in small groups?</p>
            <div className="answer">
              <label htmlFor="question5">
                <input type="radio" name="question5"/> None
              </label>
              <label htmlFor="question5">
                <input type="radio" name="question5question5"/> Mild
              </label>
              <label htmlFor="question5">
                <input type="radio" name="question5"/> Moderate
              </label>
              <label htmlFor="question5">
                <input type="radio" name="question5"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question6' className='para'>6) Avoidance: Interacting in small groups?</p>
            <div className="answer">
              <label htmlFor="question6">
                <input type="radio" name="question6"/> Never
              </label>
              <label htmlFor="question6">
                <input type="radio" name="question6"/> Occasionally
              </label>
              <label htmlFor="question6">
                <input type="radio" name="question6"/> Often
              </label>
              <label htmlFor="question6">
                <input type="radio" name="question6"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question7' className='para'>7) Anxiety/Fear: Drinking with others in Public Places?</p>
            <div className="answer">
              <label htmlFor="question7">
                <input type="radio" name="question7"/> None
              </label>
              <label htmlFor="question7">
                <input type="radio" name="question7"/> Mild
              </label>
              <label htmlFor="question7">
                <input type="radio" name="question7"/> Moderate
              </label>
              <label htmlFor="question7">
                <input type="radio" name="question7"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question8' className='para'>8) Avoidance: Drinking with others in Public Places?</p>
            <div className="answer">
              <label htmlFor="question8">
                <input type="radio" name="question8"/> Never
              </label>
              <label htmlFor="question8">
                <input type="radio" name="question8"/> Occasionally
              </label>
              <label htmlFor="question8">
                <input type="radio" name="question8"/> Often
              </label>
              <label htmlFor="question8">
                <input type="radio" name="question8"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question9' className='para'>9) Anxiety/Fear: Talking to people in authority?</p>
            <div className="answer">
              <label htmlFor="question9">
                <input type="radio" name="question9"/> None
              </label>
              <label htmlFor="question9">
                <input type="radio" name="question9"/> Mild
              </label>
              <label htmlFor="question9">
                <input type="radio" name="question9"/> Moderate
              </label>
              <label htmlFor="question9">
                <input type="radio" name="question9"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question10' className='para'>10) Avoidance: Talking to people in authority?</p>
            <div className="answer">
              <label htmlFor="question10">
                <input type="radio" name="question10"/> Never
              </label>
              <label htmlFor="question10">
                <input type="radio" name="question10"/> Occasionally
              </label>
              <label htmlFor="question10">
                <input type="radio" name="question10"/> Often
              </label>
              <label htmlFor="question10">
                <input type="radio" name="question10"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question11' className='para'>11) Anxiety/Fear: Acting, performing or giving a talk in front of an audience?</p>
            <div className="answer">
              <label htmlFor="question11">
                <input type="radio" name="question11"/> None
              </label>
              <label htmlFor="question11">
                <input type="radio" name="question11"/> Mild
              </label>
              <label htmlFor="question11">
                <input type="radio" name="question11"/> Moderate
              </label>
              <label htmlFor="question11">
                <input type="radio" name="question11"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question12' className='para'>12) Avoidance: Acting, performing or giving a talk in front of an audience?</p>
            <div className="answer">
              <label htmlFor="question12">
                <input type="radio" name="question12"/> Never
              </label>
              <label htmlFor="question12">
                <input type="radio" name="question12"/> Occasionally
              </label>
              <label htmlFor="question12">
                <input type="radio" name="question12"/> Often
              </label>
              <label htmlFor="question12">
                <input type="radio" name="question12"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question13' className='para'>13) Anxiety/Fear: Going to a party?</p>
            <div className="answer">
            <label htmlFor="question13">
                <input type="radio" name="question13"/> None
              </label>
              <label htmlFor="question13">
                <input type="radio" name="question13"/> Mild
              </label>
              <label htmlFor="question13">
                <input type="radio" name="question13"/> Moderate
              </label>
              <label htmlFor="question13">
                <input type="radio" name="question13"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question14' className='para'>14) Avoidance: Going to a party?</p>
            <div className="answer">
              <label htmlFor="question14">
                <input type="radio" name="question14"/> Never
              </label>
              <label htmlFor="question14">
                <input type="radio" name="question14"/> Occasionally
              </label>
              <label htmlFor="question14">
                <input type="radio" name="question14"/> Often
              </label>
              <label htmlFor="question14">
                <input type="radio" name="question14"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question15' className='para'>15) Anxiety/Fear: Working while being observed?</p>
            <div className="answer">
              <label htmlFor="question15">
                <input type="radio" name="question15"/> None
              </label>
              <label htmlFor="question15">
                <input type="radio" name="question15"/> Mild
              </label>
              <label htmlFor="question15">
                <input type="radio" name="question15"/> Moderate
              </label>
              <label htmlFor="question15">
                <input type="radio" name="question15"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question16' className='para'>16) Avoidance: Working while being observed?</p>
            <div className="answer">
              <label htmlFor="question16">
                <input type="radio" name="question16"/> Never
              </label>
              <label htmlFor="question16">
                <input type="radio" name="question16"/> Occasionally
              </label>
              <label htmlFor="question16">
                <input type="radio" name="question16"/> Often
              </label>
              <label htmlFor="question16">
                <input type="radio" name="question16"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question17' className='para'>17) Anxiety/Fear: Writing while being observed?</p>
            <div className="answer">
              <label htmlFor="question17">
                <input type="radio" name="question17"/> None
              </label>
              <label htmlFor="question17">
                <input type="radio" name="question17"/> Mild
              </label>
              <label htmlFor="question17">
                <input type="radio" name="question17"/> Moderate
              </label>
              <label htmlFor="question17">
                <input type="radio" name="question17"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question18' className='para'>18) Avoidance: Writing while being observed?</p>
            <div className="answer">
              <label htmlFor="question18">
                <input type="radio" name="question18"/> Never
              </label>
              <label htmlFor="question18">
                <input type="radio" name="question18"/> Occasionally
              </label>
              <label htmlFor="question18">
                <input type="radio" name="question18"/> Often
              </label>
              <label htmlFor="question18">
                <input type="radio" name="question18"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question19' className='para'>19) Anxiety/Fear: Calling someone you don't know very well?</p>
            <div className="answer">
              <label htmlFor="question19">
                <input type="radio" name="question19"/> None
              </label>
              <label htmlFor="question19">
                <input type="radio" name="question19"/> Mild
              </label>
              <label htmlFor="question19">
                <input type="radio" name="question19"/> Moderate
              </label>
              <label htmlFor="question19">
                <input type="radio" name="question19"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question20' className='para'>20) Avoidance: Calling someone you don't know very well?</p>
            <div className="answer">
              <label htmlFor="question20">
                <input type="radio" name="question20"/> Never
              </label>
              <label htmlFor="question20">
                <input type="radio" name="question20"/> Occasionally
              </label>
              <label htmlFor="question20">
                <input type="radio" name="question20"/> Often
              </label>
              <label htmlFor="question20">
                <input type="radio" name="question20"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question21' className='para'>21) Anxiety/Fear: Talking with people you don't know very well?</p>
            <div className="answer">
              <label htmlFor="question21">
                <input type="radio" name="question21"/> None
              </label>
              <label htmlFor="question21">
                <input type="radio" name="question21"/> Mild
              </label>
              <label htmlFor="question21">
                <input type="radio" name="question21"/> Moderate
              </label>
              <label htmlFor="question21">
                <input type="radio" name="question21"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question22' className='para'>22) Avoidance: Talking with people you don't know very well?</p>
            <div className="answer">
              <label htmlFor="question22">
                <input type="radio" name="question22"/> Never
              </label>
              <label htmlFor="question22">
                <input type="radio" name="question22"/> Occasionally
              </label>
              <label htmlFor="question22">
                <input type="radio" name="question22"/> Often
              </label>
              <label htmlFor="question22">
                <input type="radio" name="question22"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question23' className='para'>23) Anxiety/Fear: Meeting with strangers?</p>
            <div className="answer">
              <label htmlFor="question23">
                <input type="radio" name="question23"/> None
              </label>
              <label htmlFor="question23">
                <input type="radio" name="question23"/> Mild
              </label>
              <label htmlFor="question23">
                <input type="radio" name="question23"/> Moderate
              </label>
              <label htmlFor="question23">
                <input type="radio" name="question23"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question24' className='para'>24) Avoidance: Meeting with strangers?</p>
            <div className="answer">
              <label htmlFor="question24">
                <input type="radio" name="question24"/> Never
              </label>
              <label htmlFor="question24">
                <input type="radio" name="question24"/> Occasionally
              </label>
              <label htmlFor="question24">
                <input type="radio" name="question24"/> Often
              </label>
              <label htmlFor="question24">
                <input type="radio" name="question24"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question25' className='para'>25) Anxiety/Fear: Urinating in public restroom?</p>
            <div className="answer">
              <label htmlFor="question25">
                <input type="radio" name="question25"/> None
              </label>
              <label htmlFor="question25">
                <input type="radio" name="question25"/> Mild
              </label>
              <label htmlFor="question25">
                <input type="radio" name="question25"/> Moderate
              </label>
              <label htmlFor="question25">
                <input type="radio" name="question25"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question26' className='para'>26) Avoidance: Urinating in public restroom?</p>
            <div className="answer">
              <label htmlFor="question26">
                <input type="radio" name="question26"/> Never
              </label>
              <label htmlFor="question26">
                <input type="radio" name="question26"/> Occasionally
              </label>
              <label htmlFor="question26">
                <input type="radio" name="question26"/> Often
              </label>
              <label htmlFor="question26">
                <input type="radio" name="question26"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question27' className='para'>27) Anxiety/Fear: Entering a room when others are already seated?</p>
            <div className="answer">
              <label htmlFor="question27">
                <input type="radio" name="question27"/> None
              </label>
              <label htmlFor="question27">
                <input type="radio" name="question27"/> Mild
              </label>
              <label htmlFor="question27">
                <input type="radio" name="question27"/> Moderate
              </label>
              <label htmlFor="question27">
                <input type="radio" name="question27"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question28' className='para'>28) Avoidance: Entering a room when others are already seated?</p>
            <div className="answer">
              <label htmlFor="question28">
                <input type="radio" name="question28"/> Never
              </label>
              <label htmlFor="question28">
                <input type="radio" name="question28"/> Occasionally
              </label>
              <label htmlFor="question28">
                <input type="radio" name="question28"/> Often
              </label>
              <label htmlFor="question28">
                <input type="radio" name="question28"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question29' className='para'>29) Anxiety/Fear: Being the center of attention?</p>
            <div className="answer">
              <label htmlFor="question29">
                <input type="radio" name="question29"/> None
              </label>
              <label htmlFor="question29">
                <input type="radio" name="question29"/> Mild
              </label>
              <label htmlFor="question29">
                <input type="radio" name="question29"/> Moderate
              </label>
              <label htmlFor="question29">
                <input type="radio" name="question29"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question30' className='para'>30) Avoidance: Being the center of attention?</p>
            <div className="answer">
              <label htmlFor="question30">
                <input type="radio" name="question30"/> Never
              </label>
              <label htmlFor="question30">
                <input type="radio" name="question30"/> Occasionally
              </label>
              <label htmlFor="question30">
                <input type="radio" name="question30"/> Often
              </label>
              <label htmlFor="question30">
                <input type="radio" name="question30"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question31' className='para'>31) Anxiety/Fear: Speaking up at a meeting?</p>
            <div className="answer">
              <label htmlFor="question31">
                <input type="radio" name="question31"/> None
              </label>
              <label htmlFor="question31">
                <input type="radio" name="question31"/> Mild
              </label>
              <label htmlFor="question31">
                <input type="radio" name="question31"/> Moderate
              </label>
              <label htmlFor="question31">
                <input type="radio" name="question31"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question32' className='para'>32) Avoidance: Speaking up at a meeting?</p>
            <div className="answer">
              <label htmlFor="question32">
                <input type="radio" name="question32"/> Never
              </label>
              <label htmlFor="question32">
                <input type="radio" name="question32"/> Occasionally
              </label>
              <label htmlFor="question32">
                <input type="radio" name="question32"/> Often
              </label>
              <label htmlFor="question32">
                <input type="radio" name="question32"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question33' className='para'>33) Anxiety/Fear: Taking a test?</p>
            <div className="answer">
              <label htmlFor="question33">
                <input type="radio" name="question33"/> None
              </label>
              <label htmlFor="question33">
                <input type="radio" name="question33"/> Mild
              </label>
              <label htmlFor="question33">
                <input type="radio" name="question33"/> Moderate
              </label>
              <label htmlFor="question33">
                <input type="radio" name="question33"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question34' className='para'>34) Avoidance: Taking a test?</p>
            <div className="answer">
              <label htmlFor="question34">
                <input type="radio" name="question34"/> Never
              </label>
              <label htmlFor="question34">
                <input type="radio" name="question34"/> Occasionally
              </label>
              <label htmlFor="question34">
                <input type="radio" name="question34"/> Often
              </label>
              <label htmlFor="question34">
                <input type="radio" name="question34"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question35' className='para'>35) Anxiety/Fear: Expressing disagreement or disapproval to someone you don't know very well?</p>
            <div className="answer">
              <label htmlFor="question35">
                <input type="radio" name="question35"/> None
              </label>
              <label htmlFor="question35">
                <input type="radio" name="question35"/> Mild
              </label>
              <label htmlFor="question35">
                <input type="radio" name="question35"/> Moderate
              </label>
              <label htmlFor="question35">
                <input type="radio" name="question35"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question36' className='para'>36) Avoidance: Expressing disagreement or disapproval to someone you don't know very well?</p>
            <div className="answer">
              <label htmlFor="question36">
                <input type="radio" name="question36"/> Never
              </label>
              <label htmlFor="question36">
                <input type="radio" name="question36"/> Occasionally
              </label>
              <label htmlFor="question36">
                <input type="radio" name="question36"/> Often
              </label>
              <label htmlFor="question36">
                <input type="radio" name="question36"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question37' className='para'>37) Anxiety/Fear: Looking at people you don't know very well in the eyes?</p>
            <div className="answer">
              <label htmlFor="question37">
                <input type="radio" name="question37"/> None
              </label>
              <label htmlFor="question37">
                <input type="radio" name="question37"/> Mild
              </label>
              <label htmlFor="question37">
                <input type="radio" name="question37"/> Moderate
              </label>
              <label htmlFor="question37">
                <input type="radio" name="question37"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question38' className='para'>38) Avoidance: Looking at people you don't know very well in the eyes?</p>
            <div className="answer">
              <label htmlFor="question38">
                <input type="radio" name="question38"/> Never
              </label>
              <label htmlFor="question38">
                <input type="radio" name="question38"/> Occasionally
              </label>
              <label htmlFor="question38">
                <input type="radio" name="question38"/> Often
              </label>
              <label htmlFor="question38">
                <input type="radio" name="question38"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question39' className='para'>39) Anxiety/Fear: Giving a report to a group?</p>
            <div className="answer">
              <label htmlFor="question39">
                <input type="radio" name="question39"/> None
              </label>
              <label htmlFor="question39">
                <input type="radio" name="question39"/> Mild
              </label>
              <label htmlFor="question39">
                <input type="radio" name="question39"/> Moderate
              </label>
              <label htmlFor="question39">
                <input type="radio" name="question39"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question40' className='para'>40) Avoidance: Giving a report to a group?</p>
            <div className="answer">
              <label htmlFor="question40">
                <input type="radio" name="question40"/> Never
              </label>
              <label htmlFor="question40">
                <input type="radio" name="question40"/> Occasionally
              </label>
              <label htmlFor="question40">
                <input type="radio" name="question40"/> Often
              </label>
              <label htmlFor="question40">
                <input type="radio" name="question40"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question41' className='para'>41) Anxiety/Fear: Trying to get acquainted with someone for a romantic relationship?</p>
            <div className="answer">
              <label htmlFor="question41">
                <input type="radio" name="question41"/> None
              </label>
              <label htmlFor="question41">
                <input type="radio" name="question41"/> Mild
              </label>
              <label htmlFor="question41">
                <input type="radio" name="question41"/> Moderate
              </label>
              <label htmlFor="question41">
                <input type="radio" name="question41"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question42' className='para'>42) Avoidance: Trying to get acquainted with someone for a romantic relationship?</p>
            <div className="answer">
              <label htmlFor="question42">
                <input type="radio" name="question42"/> Never
              </label>
              <label htmlFor="question42">
                <input type="radio" name="question42"/> Occasionally
              </label>
              <label htmlFor="question42">
                <input type="radio" name="question42"/> Often
              </label>
              <label htmlFor="question42">
                <input type="radio" name="question42"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question43' className='para'>43) Anxiety/Fear: Returning goods to a store for a refund?</p>
            <div className="answer">
              <label htmlFor="question43">
                <input type="radio" name="question43"/> None
              </label>
              <label htmlFor="question43">
                <input type="radio" name="question43"/> Mild
              </label>
              <label htmlFor="question43">
                <input type="radio" name="question43"/> Moderate
              </label>
              <label htmlFor="question43">
                <input type="radio" name="question43"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question44' className='para'>44) Avoidance: Returning goods to a store for a refund?</p>
            <div className="answer">
              <label htmlFor="question44">
                <input type="radio" name="question44"/> Never
              </label>
              <label htmlFor="question44">
                <input type="radio" name="question44"/> Occasionally
              </label>
              <label htmlFor="question44">
                <input type="radio" name="question44"/> Often
              </label>
              <label htmlFor="question44">
                <input type="radio" name="question44"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question45' className='para'>45) Anxiety/Fear: Giving a party?</p>
            <div className="answer">
              <label htmlFor="question45">
                <input type="radio" name="question45"/> None
              </label>
              <label htmlFor="question45">
                <input type="radio" name="question45"/> Mild
              </label>
              <label htmlFor="question45">
                <input type="radio" name="question45"/> Moderate
              </label>
              <label htmlFor="question45">
                <input type="radio" name="question45"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question46' className='para'>46) Avoidance: Giving a party?</p>
            <div className="answer">
              <label htmlFor="question46">
                <input type="radio" name="question46"/> Never
              </label>
              <label htmlFor="question46">
                <input type="radio" name="question46"/> Occasionally
              </label>
              <label htmlFor="question46">
                <input type="radio" name="question46"/> Often
              </label>
              <label htmlFor="question46">
                <input type="radio" name="question46"/> Always
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question47' className='para'>47) Anxiety/Fear: Resisting a high pressure salesperson?</p>
            <div className="answer">
              <label htmlFor="question47">
                <input type="radio" name="question47"/> None
              </label>
              <label htmlFor="question47">
                <input type="radio" name="question47"/> Mild
              </label>
              <label htmlFor="question47">
                <input type="radio" name="question47"/> Moderate
              </label>
              <label htmlFor="question47">
                <input type="radio" name="question47"/> Severe
              </label>
            </div>
          </div>
          <div className="question">
            <p id='question48' className='para'>48) Avoidance: Resisting a high pressure salesperson?</p>
            <div className="answer">
              <label htmlFor="question48">
                <input type="radio" name="question48"/> Never
              </label>
              <label htmlFor="question48">
                <input type="radio" name="question48"/> Occasionally
              </label>
              <label htmlFor="question48">
                <input type="radio" name="question48"/> Often
              </label>
              <label htmlFor="question48">
                <input type="radio" name="question48"/> Always
              </label>
            </div>
          </div>
          <button className="submit">See Results</button>
        </form>
      </div>
    </div>
  )
}

export default Form
