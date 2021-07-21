import React, { Component } from 'react';
import { Button, Collapse } from '@material-ui/core';

import './App.scss';
import ReactWhatsapp from 'react-whatsapp';
import Form from './components/form.js';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from './utilities/theme';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = [React.createRef(), React.createRef(), React.createRef()];
  }
  state = {
    name: '',
    phone: '',
    email: '',
    qna: [false, false, false, false, false],
    collapseForm: [false, false, false, false, false],
  };
  openForm = (index) => {
    let collapseForm = [...this.state.collapseForm];
    collapseForm[index] = !collapseForm[index];
    this.setState({ collapseForm });
  };
  qna = (index) => {
    let qna = [...this.state.qna];
    qna[index] = !qna[index];
    this.setState({ qna });
  };
  inputOnChange = (e) => {
    if (e.target.id === 'accountname') {
      this.setState({ name: e.target.value });
    } else if (e.target.id === 'telephone1') {
      this.setState({ phone: e.target.value });
    } else if (e.target.id === 'emailaddress1') {
      this.setState({ email: e.target.value });
    }
  };
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Navbar refProp={this.myRef} />

          <div ref={this.myRef[0]} className='content'>
            <h1 className='title'>הספר "עוף החול" - שי שצברג</h1>
            <h3>בטח אתם אומרים לעצמכם:</h3>
            <p>
              זה בטח עוד סיפור לא אמיתי של מישהו שמנסה למכור לי משהו..
              <br />
              לא הגיוני לצאת מחובות כל כך גדולים בזמן כל כך קצר ועוד לפנסיה..
              <br />
              מה הוא יכול לחדש לי שלא קראתי בספר מוטיבציה אחר..
              <br />
              אם הוא עשה את זה, זה לא אומר שגם אני יכול...
              <br />
              <br />
              הספר עוף החול מבוסס על סיפור אמיתי ועל חיי. זו לא עלילת פרי הדמיון
              או פנטזיה, אלא תסריט חיי שמלווה אותי מהנקודות הקשות ביותר ועד
              למקום של שיא ההצלחה.
              <br />
              הספר כתוב כעלילה מעניינת שתרתק אתכם ותשאיר אתכם פעורי פה, ואם לרגע
              היה לכם ספק עד כמה המצב היה קשה ועד כמה השינוי היה אמיתי - "עוף
              החול" יענה לכם על כל השאלות.
              <br />
              זה לא סתם עוד ספר, זה ספר משנה פרספקטיבה וחיים - שינער אתכם ויגרום
              לכם להבין שגם אתם יכולים.
              <br />
            </p>

            <p>
              מבוסס על סיפור אמיתי.
              <br />
              <br />
              סיפור מעורר השראה על בחור צעיר שנקלע לחובות כבדים של 3 מיליון ש"ח
              ששליש מהם היו לשוק האפור ולמרות הכל הצליח להגיע לעצמאות כלכלית.
            </p>
            <img className='mockup' src='styles/images/mockup.png' alt=''></img>
            <p>
              לפני עשור חזרתי מניו יורק.
              <br />
              בניתי שם חברת נדל״ן מצליחה וחיים לא רעים אבל זה עדייו הרגיש כמו{' '}
              <strong>"כלוב של זהב"</strong>. <br />
              כשחזרתי ארצה - התאחדי עם אהבת חיי והגשמתי את החלום שהיה לי - לכתוב
              ספר. <br />
              <br />
              הספר מספר על איך הגעתי לניו יורק עם <strong>
                600 דולר בכיס
              </strong>{' '}
              אחרי חובות עתק שהשארתי בארץ - אשר לשמחתי, הצלחתי לסלק אחרי 5 שנים
              של עבודה קשה.
              <br />
              מספר חודשים לאחר חזרתי הקמתי חברה בפורמט שונה מעט מבעבר, אשר
              הכניסה אותי למערבולת <strong>מסחררת</strong> שבה איבדתי את כל
              החסכונות איתם הגעתי ואף יצרתי חובות במספרים{' '}
              <strong>כפולים</strong> מהפעם הקודמת. <br />
              <br />
              רק שהפעם מלבד חובותיי לבנקים, היו גם חובות לשוק האפור...
              <br />
              <br />
              אם לא די בזאת, <strong>בנקודת השיא</strong> של נפילתי הכלכלית
              איבדתי את אימי האהובה ממחלת הסרטן ואילו בני סיקירי, אובחן על
              הספקטרום האוטיסטי. <br />
              למרות כל המשברים, ולמרות חובות עצומים שצברתי, התרחשו ניסים גלויים
              שהביאו אותי לנקודה בה אני נמצא היום -{' '}
              <strong>נקי מכל חוב, בעל אמצעים ומשפחה אוהבת ותומכת</strong>.
              <br />
              אם לכתוב ספר היה בגדר "חלום" - אז אצלי אין חלומות, רק יעדים.{' '}
              <br />
              <strong>ובזכות זה - אתם כאן.</strong>
              <br />
              <br />
            </p>
            <Button
              classes={{ root: this.state.collapseForm[0] ? 'opened' : '' }}
              style={{ fontSize: '2rem' }}
              color='primary'
              variant='contained'
              onClick={() => this.openForm(0)}
            >
              אני רוצה את הספר
            </Button>
            <Collapse in={this.state.collapseForm[0]}>
              <Form inputOnChange={(e) => this.inputOnChange} />
            </Collapse>
            <div className='self-introduction'>
              <div className='text'>
                <h3 ref={this.myRef[1]}>הצגה עצמית</h3>
                <h4>על הסופר של עוף החול</h4>
                <p>
                  שמי שי שצברג (38), יליד נהריה.
                  <br />
                  נשוי ואב ל-4 ילדים מדהימים ואיש עסקים בעל חברות בארץ ובעולם
                  בתחומי השיווק, המרקטינג, הנדל"ן והייעוץ עסקי.
                  <br />
                  <br />
                  הסיפור שלי ירתק אתכם, יתן לכם השראה לחיות את החיים שתמיד רציתם
                  ובעיקר ישנה לכם את כל המיינדסט שלכם.
                  <br />
                  <br />
                </p>
              </div>
              <div className='image'>
                <img src='styles/images/shai.jpeg' alt=''></img>
              </div>
              <div className='spacer' style={{ clear: 'both' }}></div>
            </div>

            <h3>קטע מתוך הספר עוף החול</h3>
            <p>
              "אני מהמר. לא יעזור כלום. זה מי שאני.
              <br />
              <br />
              איך אומרים? לזהות את הבעיה הוא שלב חשוב וגדול במציאת הפתרון לה. אז
              כאן אני לא בטוח שימצא פתרון.
              <br />
              <br />
              שלא תבינו אותי לא נכון, אני לא מהמר בקטע של קזינו, או טוטולוטו.
              אני מהמר על הכול בחיים ורוב ההימורים האלה הם בכלל עם עצמי, וללא
              קשר לגורם חיצוני כלשהו.
              <br />
              <br />
              "בוא נראה אם אני מצליח להוריד את המחיר של הדירה ל 400 אלף" "בוא
              נראה אם אני מוציא מהמשקיע הזה עוד מאה אלף דולר" או "הנה חנות שכבר
              שניים נפלו בה. בוא נראה אם אני אצליח להרים אותה לשחקים".
              <br />
              <br />
              אלה שלוש דוגמאות להימורים שלי עם עצמי, ואלה דוגמאות טריות, שהתרחשו
              בחצי השנה האחרונה. אבל ההימורים הם אצלי בדם, כבר מילדות ומספר
              הדוגמאות בטח יגיע למאות. בכל תחומי החיים. הימרתי בעסקים והימרתי
              בגדול, בניהול משאים ומתנים מול אנשים וארגונים חזקים ממני בהרבה,
              וכשאני החזקתי דקות ארוכות מבלי למצמץ, הם נשברו ואני "זכיתי"
              בהימור. כך קיבלתי עבודה למרות שנהריה לא בדיוק ממוקמת באיזור המרכז,
              כך קיבלתי שכר משודרג מכרישי עסקים ממולחים שלא האמינו למספרים שאני
              זורק לאוויר, וכך הצלחתי בגיל 38 לצאת ל"פנסיה".
              <br />
              <br />
              אם אתה מהמר על הסוס הנכון, אתה תזכה בהימור. והסוס המנצח הזה היה
              "אני" ואני האמנתי בו כמעט תמיד. וכשהפסקתי להאמין בו לעיתים,
              כשהנמוך היה נמוך מאוד, נמוך מידי עבורי, הייתה לי משפחה אוהבת שתמכה
              בי, הצילה אותי והימרה עלי."
              <br />
              <br />
            </p>
            <Button
              classes={{ root: this.state.collapseForm[1] ? 'opened' : '' }}
              style={{ fontSize: '2rem' }}
              variant='contained'
              color='primary'
              onClick={() => this.openForm(1)}
            >
              וואו, זה מעניין אותי!
            </Button>
            <Collapse in={this.state.collapseForm[1]}>
              <Form inputOnChange={(e) => this.inputOnChange} />
            </Collapse>
            <h4>למי הספר לא מתאים?</h4>
            <ul className='bad-list'>
              <li>
                <span>לאנשים שלא אכפת להם מהחיים שלהם</span>
              </li>
              <li>
                <span>
                  לאנשים שחושבים שהם במקום הכי גבוה שהם מסוגלים להיות בו
                </span>
              </li>
              <li>
                <span>לאנשים שלא רוצים להשתנות</span>
              </li>
              <li>
                <span>לאנשים סקפטיים</span>
              </li>
              <li>
                <span>לאנשים שאין להם יכולת לפרגן ולאהוב</span>
              </li>
              <li>
                <span>לאנשים ללא שאיפות או חלומות</span>
              </li>
            </ul>
            <h4>למי הספר כן מתאים?</h4>
            <ul className='good-list'>
              <li>
                <span>אם אתם רוצים לשפר את החיים שלכם</span>
              </li>
              <li>
                <span>
                  אם אתם נמצאים בחובות ורוצים לקבל השראה ממישהו שעבר בדיוק אותו
                  דבר
                </span>
              </li>
              <li>
                <span>אם אתם חושבים שאיבדתם את הדרך</span>
              </li>
              <li>
                <span>אם אתם רוצים לקרוא ספר עם עלילה מעניינת ומרתקת</span>
              </li>
              <li>
                <span>אם אתם רוצים להיות הגרסא הטובה ביותר של עצמכם</span>
              </li>
              <li>
                <span>
                  אם אתם רוצים לשנות את החשיבה ולהצליח לקום מהמקומות הנמוכים
                  בחיים
                </span>
              </li>
              <li>
                <span>אם אתם רוצים לשאוב השראה מסיפור הצלחה אמיתי מהחיים</span>
              </li>
            </ul>
            <p>
              חושבים שאתם בנקודה <strong>חלשה</strong> בחיים? <br />
              אתם נמצאים במקום שאתם <strong>לא אוהבים</strong> להיות בו? עבודה{' '}
              <strong>שוחקת</strong>? החובות <strong>לוחצים</strong>?<br />
              גם אני הייתי שם, כמוכם - ואם אני הצלחתי להגיע למצב שבגיל 38 יצאתי
              לפנסיה - <strong>זה לא סיפור בלתי אפשרי</strong>.<br />
              <br />
              הספר שלי יראה לכם איך מהמקום הכי <strong>נמוך</strong> אפשר להגיע
              להישגים הכי <strong>גבוהים</strong>, לחיות את החיים שתמיד רציתם,{' '}
              <strong>חופשיים</strong> <strong>כלכלית</strong> ובעיקר - אושר
              וזמן חופשי להיות עם היקרים לכם מכל.
            </p>
            <Button
              classes={{ root: this.state.collapseForm[2] ? 'opened' : '' }}
              style={{ fontSize: '2rem' }}
              variant='contained'
              color='primary'
              onClick={() => this.openForm(2)}
            >
              אני רוצה לחיות גבוה
            </Button>
            <Collapse in={this.state.collapseForm[2]}>
              <Form inputOnChange={(e) => this.inputOnChange} />
            </Collapse>
            <br />

            <Button
              variant='contained'
              classes={{
                root: `question ${this.state.qna[0] ? 'opened' : ''}`,
              }}
              onClick={() => this.qna(0)}
            >
              לאיזה גילאים הספר מתאים?
            </Button>
            <Collapse in={this.state.qna[0]}>
              <h2>
                הספר מתאים לכל אחד שמרגיש הוא רוצה יותר, והוא מוכן להשקיע זמן
                לקריאה בשביל זה.
              </h2>
            </Collapse>
            <Button
              variant='contained'
              classes={{
                root: `question ${this.state.qna[1] ? 'opened' : ''}`,
              }}
              onClick={() => this.qna(1)}
            >
              אני מפחד/ת לשלם באשראי דרך האינטרנט, זה בטוח?
            </Button>
            <Collapse in={this.state.qna[1]}>
              <h2>
                מובן ולגיטימי לגמרי, אבל התשלום מאובטח באבטחה המקסימלית. אני
                עובד עם מערכת סליקה שנקראת X והכל נשאר חסוי.
                <br />
                פרטי האשראי שלכם עוצרים אצל חברת האשראי ולא מגיעים אליי.
                <br />
              </h2>
            </Collapse>
            <Button
              variant='contained'
              classes={{
                root: `question ${this.state.qna[2] ? 'opened' : ''}`,
              }}
              onClick={() => this.qna(2)}
            >
              כמה עמודים ופרקים יש בספר?
            </Button>
            <Collapse in={this.state.qna[2]}>
              <h2>
                X עמודים שמתוכם Y פרקים שישאירו אתכם פעורי פה ומלאי השראה.
              </h2>
            </Collapse>
            <Button
              variant='contained'
              classes={{
                root: `question ${this.state.qna[3] ? 'opened' : ''}`,
              }}
              onClick={() => this.qna(3)}
            >
              האם זה ספר דיגיטלי או פיזי?
            </Button>
            <Collapse in={this.state.qna[3]}>
              <h2>
                יש אופציה לקנות את הספר גם בגרסא פיזית וגם בגרסא הדיגיטלית
              </h2>
            </Collapse>
            <Button
              variant='contained'
              classes={{
                root: `question ${this.state.qna[4] ? 'opened' : ''}`,
              }}
              onClick={() => this.qna(4)}
            >
              השתכנעתי, איך אני רוכש את הספר?
            </Button>
            <Collapse in={this.state.qna[4]}>
              <h2>
                כאן בדף הרכישה, או בהעברה בנקאית או באופציה אחרת (לבחירתך שי)
              </h2>
            </Collapse>

            <h3 style={{ margin: '0' }}>עדיין מתלבטים? שלחו הודעה בוואטסאפ</h3>
            <p ref={this.myRef[2]} style={{ margin: '0' }}>
              (לחצו על האייקון למטה)
            </p>

            <ReactWhatsapp
              style={{
                background: 'transparent',
                border: 'transparent',
                cursor: 'pointer',
              }}
              number='054-9149898'
              message='הגעתם לשי שצברג "עוף החול" '
            >
              <img style={{ width: '50px' }} src='styles/images/whatsapp.png' />
            </ReactWhatsapp>
          </div>
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
