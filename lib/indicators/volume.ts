export interface VolumeAnalysis {

  averageVolume: number;

  currentVolume: number;

  isHighVolume: boolean;

  isLowVolume: boolean;

  isVolumeSpike: boolean;

}

export function calculateVolumeAnalysis(

  volumes: number[],

  multiplier: number = 1.5

): VolumeAnalysis {

  if (volumes.length === 0) {

    return {

      averageVolume: 0,

      currentVolume: 0,

      isHighVolume: false,

      isLowVolume: false,

      isVolumeSpike: false,

    };

  }

  const total = volumes.reduce(

    (sum, value) => sum + value,

    0

  );

  const averageVolume = total / volumes.length;

  const currentVolume =

    volumes[volumes.length - 1];

  const isHighVolume =

    currentVolume > averageVolume;

  const isLowVolume =

    currentVolume < averageVolume;

  const isVolumeSpike =

    currentVolume >= averageVolume * multiplier;

  return {

    averageVolume,

    currentVolume,

    isHighVolume,

    isLowVolume,

    isVolumeSpike,

  };

}
