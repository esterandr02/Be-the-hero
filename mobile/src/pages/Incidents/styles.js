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

  headerText: {
    fontSize: 15,
    color: '#9393a1',
  }, 

  headerTextBold: {
    fontWeight: 'bold',
  }, 

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#e8e8e8',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight:24,
    color: '#9393a1',
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(21, 41, 49, 0.336)',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#e8e8e8',
    fontWeight:'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#9393a1'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  }

});