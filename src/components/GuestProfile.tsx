import React from 'react';
import { 
  User, Star, Clock, Calendar, Coffee, Thermometer,
  MapPin, CreditCard, Phone, Mail, Building, Activity,
  Wifi, Monitor, Moon, Sun, History, Award
} from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import { useSatisfactionTrend } from '../hooks/useDataUpdates';

const GuestProfile = () => {
  const { t } = useLanguage();
  const satisfactionTrend = useSatisfactionTrend();

  const guestData = {
    name: "Sarah Johnson",
    membershipLevel: "Diamond",
    memberSince: "2020",
    totalPoints: 125000,
    checkIn: "2024-03-15",
    checkOut: "2024-03-18",
    roomPreferences: {
      temperature: "22°C",
      roomType: "Executive Suite",
      specialRequests: "Extra pillows, High floor",
      wakeUpTime: "07:00",
      sleepTime: "23:00",
      workHours: "09:00 - 17:00"
    },
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "sarah.j@email.com",
      address: "123 Business Ave, New York, NY"
    },
    stayHistory: {
      totalStays: 47,
      averageRating: 4.8,
      lastStay: "2024-02-01",
      totalNights: 156,
      favoriteLocations: ["Shanghai", "Beijing", "Hong Kong"]
    },
    preferences: {
      roomTemperature: 85,
      internetUsage: 90,
      roomService: 70,
      entertainment: 65,
      workspaceUsage: 95,
      fitnessCenter: 40
    }
  };

  const radarData = [
    {
      subject: t('guest.preferences.roomTemp'),
      value: guestData.preferences.roomTemperature,
      fullMark: 100,
    },
    {
      subject: t('guest.preferences.internet'),
      value: guestData.preferences.internetUsage,
      fullMark: 100,
    },
    {
      subject: t('guest.preferences.roomService'),
      value: guestData.preferences.roomService,
      fullMark: 100,
    },
    {
      subject: t('guest.preferences.entertainment'),
      value: guestData.preferences.entertainment,
      fullMark: 100,
    },
    {
      subject: t('guest.preferences.workspace'),
      value: guestData.preferences.workspaceUsage,
      fullMark: 100,
    },
    {
      subject: t('guest.preferences.fitness'),
      value: guestData.preferences.fitnessCenter,
      fullMark: 100,
    },
  ];

  return (
    <div className="pt-4 space-y-6">
      {/* Guest Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{guestData.name}</h2>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  {guestData.membershipLevel} {t('guest.membershipLevel')}
                </span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-600">
                  {t('guest.memberSince')} {guestData.memberSince}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">{t('guest.totalPoints')}</div>
            <div className="text-2xl font-bold text-blue-600">
              {guestData.totalPoints.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Guest Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preference Radar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {t('guest.preferences')}
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name={t('guest.preferences')}
                  dataKey="value"
                  stroke="#2563eb"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Satisfaction Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {t('guest.satisfactionTrend')}
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={satisfactionTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[4, 5]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rating"
                  stroke="#2563eb"
                  activeDot={{ r: 8 }}
                  name={t('guest.rating')}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stay History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {t('guest.stayHistory')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <History className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-800">
                {t('guest.totalStays')}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {guestData.stayHistory.totalStays}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-800">
                {t('guest.totalNights')}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {guestData.stayHistory.totalNights}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-800">
                {t('guest.avgRating')}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {guestData.stayHistory.averageRating}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-800">
                {t('guest.membershipLevel')}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {guestData.membershipLevel}
            </p>
          </div>
        </div>

        {/* Room Preferences */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium text-gray-800 mb-4">
            {t('guest.roomPreferences')}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">{t('guest.temperature')}</p>
              <p className="text-base font-medium">
                {guestData.roomPreferences.temperature}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('guest.roomType')}</p>
              <p className="text-base font-medium">
                {guestData.roomPreferences.roomType}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('guest.specialRequests')}</p>
              <p className="text-base font-medium">
                {guestData.roomPreferences.specialRequests}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-4">
            {t('guest.contactInfo')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-500" />
              <span>{guestData.contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>{guestData.contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>{guestData.contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestProfile;