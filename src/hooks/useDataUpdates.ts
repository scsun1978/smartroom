import { useState, useEffect } from 'react';
import {
  generateNetworkData,
  generateOptimizationData,
  generateEnergyData,
  generateSatisfactionTrend,
  generateRoomEnvironmentData,
  generateEnergyMetrics,
  UPDATE_INTERVALS
} from '../services/mockData';

export const useNetworkData = () => {
  const [data, setData] = useState(generateNetworkData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateNetworkData());
    }, UPDATE_INTERVALS.NETWORK);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export const useOptimizationData = () => {
  const [data, setData] = useState(generateOptimizationData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateOptimizationData());
    }, UPDATE_INTERVALS.OPTIMIZATION);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export const useEnergyData = () => {
  const [data, setData] = useState(generateEnergyData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateEnergyData());
    }, UPDATE_INTERVALS.ENERGY);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export const useSatisfactionTrend = () => {
  const [data, setData] = useState(generateSatisfactionTrend());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateSatisfactionTrend());
    }, UPDATE_INTERVALS.SATISFACTION);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export const useRoomEnvironment = () => {
  const [data, setData] = useState(generateRoomEnvironmentData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRoomEnvironmentData());
    }, UPDATE_INTERVALS.ENVIRONMENT);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export const useEnergyMetrics = () => {
  const [data, setData] = useState(generateEnergyMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateEnergyMetrics());
    }, UPDATE_INTERVALS.METRICS);

    return () => clearInterval(interval);
  }, []);

  return data;
};