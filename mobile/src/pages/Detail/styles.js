import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#000000',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
    marginTop: 48,
    backgroundColor: 'rgba(21, 41, 49, 0.336)',
  },

  incidentProperty: {
    fontSize: 14,
    color: '#e8e8e8',
    fontWeight:'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#9393a1',
  },

  contactBox: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(21, 41, 49, 0.336)',
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#e8e8e8',
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: '#9393a1',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 12,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  }

});