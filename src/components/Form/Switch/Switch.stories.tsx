import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from 'voyage-design-system';

const meta: Meta<typeof Switch> = {
  title: 'Components/Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 🔄 Switch 컴포넌트

이진 선택을 위한 토글 스위치 컴포넌트입니다.

### 주요 특징:
- **간단한 API**: checked와 onChange props만으로 동작
- **부드러운 애니메이션**: 자연스러운 토글 전환 효과
- **접근성**: 키보드 탐색 및 스크린 리더 지원
- **상태 관리**: 활성/비활성 및 비활성화 상태 지원
- **반응형**: 터치 및 마우스 상호작용 모두 지원

### 사용 예시:
\`\`\`tsx
import { Switch } from 'voyage-design-system';

const [enabled, setEnabled] = useState(false);

<Switch 
  checked={enabled} 
  onChange={setEnabled}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Default() {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  },
};

export const Checked: Story = {
  name: '체크된 상태',
  render: function Checked() {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} />;
  },
};

export const Disabled: Story = {
  name: '비활성 상태',
  render: () => (
    <div className='flex gap-4'>
      <Switch checked={false} onChange={() => {}} disabled />
      <Switch checked={true} onChange={() => {}} disabled />
    </div>
  ),
};

export const WithLabels: Story = {
  name: '라벨과 함께',
  render: function WithLabels() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <label htmlFor='notifications' className='text-sm font-medium'>
            알림 받기
          </label>
          <Switch id='notifications' checked={notifications} onChange={setNotifications} />
        </div>

        <div className='flex items-center justify-between'>
          <label htmlFor='darkMode' className='text-sm font-medium'>
            다크 모드
          </label>
          <Switch id='darkMode' checked={darkMode} onChange={setDarkMode} />
        </div>

        <div className='flex items-center justify-between'>
          <label htmlFor='autoSave' className='text-sm font-medium'>
            자동 저장
          </label>
          <Switch id='autoSave' checked={autoSave} onChange={setAutoSave} />
        </div>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  name: '설정 패널',
  render: function SettingsPanel() {
    const [settings, setSettings] = useState({
      notifications: true,
      emailAlerts: false,
      pushNotifications: true,
      soundEnabled: false,
      vibrationEnabled: true,
      autoUpdate: false,
      darkMode: false,
      dataSync: true,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className='w-80 space-y-6'>
        <h3 className='text-lg font-semibold'>앱 설정</h3>

        <div className='space-y-4'>
          <h4 className='text-sm font-medium text-gray-700'>알림 설정</h4>

          <div className='space-y-3 pl-4'>
            <div className='flex items-center justify-between'>
              <div>
                <label className='text-sm font-medium'>전체 알림</label>
                <p className='text-xs text-gray-500'>모든 알림을 받습니다</p>
              </div>
              <Switch checked={settings.notifications} onChange={() => updateSetting('notifications')} />
            </div>

            <div className='flex items-center justify-between'>
              <div>
                <label className='text-sm font-medium'>이메일 알림</label>
                <p className='text-xs text-gray-500'>이메일로 알림을 받습니다</p>
              </div>
              <Switch
                checked={settings.emailAlerts}
                onChange={() => updateSetting('emailAlerts')}
                disabled={!settings.notifications}
              />
            </div>

            <div className='flex items-center justify-between'>
              <div>
                <label className='text-sm font-medium'>푸시 알림</label>
                <p className='text-xs text-gray-500'>모바일 푸시 알림</p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onChange={() => updateSetting('pushNotifications')}
                disabled={!settings.notifications}
              />
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h4 className='text-sm font-medium text-gray-700'>시스템 설정</h4>

          <div className='space-y-3 pl-4'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>소리</label>
              <Switch checked={settings.soundEnabled} onChange={() => updateSetting('soundEnabled')} />
            </div>

            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>진동</label>
              <Switch checked={settings.vibrationEnabled} onChange={() => updateSetting('vibrationEnabled')} />
            </div>

            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>자동 업데이트</label>
              <Switch checked={settings.autoUpdate} onChange={() => updateSetting('autoUpdate')} />
            </div>

            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>다크 모드</label>
              <Switch checked={settings.darkMode} onChange={() => updateSetting('darkMode')} />
            </div>

            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>데이터 동기화</label>
              <Switch checked={settings.dataSync} onChange={() => updateSetting('dataSync')} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const FeatureToggles: Story = {
  name: '기능 토글',
  render: function FeatureToggles() {
    const [features, setFeatures] = useState({
      betaFeatures: false,
      advancedMode: false,
      debugging: false,
      analytics: true,
      performance: false,
    });

    const updateFeature = (key: keyof typeof features) => {
      setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className='w-96 space-y-4'>
        <h3 className='text-lg font-semibold'>개발자 옵션</h3>

        <div className='space-y-4 p-4 border rounded-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <label className='text-sm font-medium'>베타 기능</label>
              <p className='text-xs text-gray-500'>실험적 기능을 활성화합니다</p>
            </div>
            <Switch checked={features.betaFeatures} onChange={() => updateFeature('betaFeatures')} />
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <label className='text-sm font-medium'>고급 모드</label>
              <p className='text-xs text-gray-500'>고급 설정을 표시합니다</p>
            </div>
            <Switch checked={features.advancedMode} onChange={() => updateFeature('advancedMode')} />
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <label className='text-sm font-medium'>디버깅 모드</label>
              <p className='text-xs text-gray-500'>개발자 도구를 활성화합니다</p>
            </div>
            <Switch checked={features.debugging} onChange={() => updateFeature('debugging')} />
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <label className='text-sm font-medium'>분석 데이터</label>
              <p className='text-xs text-gray-500'>사용 데이터를 수집합니다</p>
            </div>
            <Switch checked={features.analytics} onChange={() => updateFeature('analytics')} />
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <label className='text-sm font-medium'>성능 모니터링</label>
              <p className='text-xs text-gray-500'>성능 지표를 추적합니다</p>
            </div>
            <Switch checked={features.performance} onChange={() => updateFeature('performance')} />
          </div>
        </div>

        <div className='mt-4 p-3 bg-gray-50 rounded-lg text-sm'>
          <p className='font-medium'>활성화된 기능:</p>
          <ul className='mt-1 space-y-1'>
            {Object.entries(features)
              .filter(([, enabled]) => enabled)
              .map(([feature]) => (
                <li key={feature} className='text-gray-600'>
                  • {feature}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  name: '상호작용 데모',
  render: function InteractiveDemo() {
    const [isOnline, setIsOnline] = useState(true);
    const [autoSave, setAutoSave] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
      <div className='space-y-6 w-80'>
        <div className='p-4 border rounded-lg'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h4 className='font-medium'>연결 상태</h4>
              <p className='text-sm text-gray-500'>{isOnline ? '온라인' : '오프라인'} 모드</p>
            </div>
            <Switch checked={isOnline} onChange={setIsOnline} />
          </div>

          <div
            className={`p-3 rounded-lg text-sm ${
              isOnline
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {isOnline ? '✅ 서버에 연결되었습니다' : '❌ 오프라인 모드입니다'}
          </div>
        </div>

        <div className='p-4 border rounded-lg'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h4 className='font-medium'>자동 저장</h4>
              <p className='text-sm text-gray-500'>{autoSave ? '활성화됨' : '비활성화됨'}</p>
            </div>
            <Switch checked={autoSave} onChange={setAutoSave} />
          </div>

          <div
            className={`p-3 rounded-lg text-sm ${
              autoSave
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-gray-50 text-gray-700 border border-gray-200'
            }`}
          >
            {autoSave ? '💾 변경사항이 자동으로 저장됩니다' : '📝 수동으로 저장해야 합니다'}
          </div>
        </div>

        <div className='p-4 border rounded-lg'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h4 className='font-medium'>알림</h4>
              <p className='text-sm text-gray-500'>{notifications ? '허용됨' : '차단됨'}</p>
            </div>
            <Switch checked={notifications} onChange={setNotifications} />
          </div>

          <div
            className={`p-3 rounded-lg text-sm ${
              notifications
                ? 'bg-purple-50 text-purple-700 border border-purple-200'
                : 'bg-gray-50 text-gray-700 border border-gray-200'
            }`}
          >
            {notifications ? '🔔 알림을 받을 수 있습니다' : '🔕 알림이 차단되었습니다'}
          </div>
        </div>
      </div>
    );
  },
};
