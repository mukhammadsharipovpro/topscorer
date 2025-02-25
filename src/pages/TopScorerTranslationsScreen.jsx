import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import TopScorerHeader from '../components/TopScorerHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <TopScorerHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('EHF', '05.03 19:30', 'Barcelona \n' + 'Paris Saint-Germain')}
        {renderBroadcast('Handball', '07.03 18:15', 'THW Kiel \n' + 'Rhein-Neckar Löwen')}
        {renderBroadcast('French D1', '09.03 21:00', 'Montpellier \n' + 'Nantes')}
        {renderBroadcast('SEHA League', '11.03 20:30', 'Veszprém \n' + 'PPD Zagreb')}
        {renderBroadcast('Polish', '13.03 19:45', 'Wisla Plock \n' + 'Vive Kielce')}
        {renderBroadcast('Norwegian', '15.03 18:00', 'Elverum \n' + 'Drammen HK')}
        {renderBroadcast('Danish League', '17.03 22:00', 'GOG \n' + 'Aalborg Handball')}
        {renderBroadcast('Hungarian I', '19.03 17:45', 'Pick Szeged \n' + 'Tatabánya KC')}
        {renderBroadcast('IHF', '21.03 16:30', 'Germany \n' + 'Sweden')}
        {renderBroadcast('Olympic', '23.03 19:15', 'Spain \n' + 'Denmark')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 28,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
