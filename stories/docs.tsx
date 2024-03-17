import { createSignal } from 'solid-js';
import { Meta, Story } from '@storybook/react';
import { Thing, Props } from '../src';

export default {} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [menuVisible, setMenuVisible] = createSignal(false);
  const [selectedSection, setSelectedSection] = createSignal('home');

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const showContent = (sectionId: string) => {
    setSelectedSection(sectionId);
    setMenuVisible(false);
  };

  const [props] = createSignal(args);

  return (
    <div>
      <div className="menu-container">
        <div
          className={`open-close-menu ${menuVisible() ? 'clicked' : ''}`}
          onClick={toggleMenu}
        >
          <span>☰</span>
        </div>
        <div
          className="menu"
          style={{ display: menuVisible() ? 'block' : 'none' }}
        >
          <ul>
            <li>
              <a href="#" onClick={() => showContent('home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#">Demos</a>
              <ul>
                <li>
                  <a href="#" onClick={() => showContent('demo1')}>
                    Demo 1
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => showContent('demo2')}>
                    Demo 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        {/* Here you should the Thing component with dynamic properties. */}
        <Thing {...props()} />
      </div>
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
