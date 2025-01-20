import 'react';
import TestAuth from './TestAuth';
import TestNotifications from './TestNotifications';
import TestCalendar from './TestCalendar';
import TestChat from './TestChat';

const TestSuite = () => {
  return (
    <div>
      <h1>Test Suite</h1>
      <div>
        <h2>Authentification</h2>
        <TestAuth />
      </div>
      <div>
        <h2>Notifications</h2>
        <TestNotifications />
      </div>
      <div>
        <h2>Calendrier</h2>
        <TestCalendar />
      </div>
      <div>
        <h2>Chat</h2>
        <TestChat />
      </div>
    </div>
  );
};

export default TestSuite;