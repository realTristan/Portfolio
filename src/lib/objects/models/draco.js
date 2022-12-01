import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

// Draco Loader for Blender Models
export const DRACO_LOADER = new DRACOLoader()
DRACO_LOADER.setDecoderConfig({ type: 'js' });
DRACO_LOADER.setDecoderPath('/draco/');
DRACO_LOADER.preload();