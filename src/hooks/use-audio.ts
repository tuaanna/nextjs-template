import { useEffect, useRef } from 'react'

/**
 * Custom hook to create and manage an HTMLAudioElement.
 *
 * @param src - The source URL of the audio file.
 * @param options - Configuration options for the audio element.
 * @param options.volume - The volume level of the audio (default is 1).
 * @param options.playbackRate - The playback rate of the audio (default is 1).
 * @returns The HTMLAudioElement instance.
 *
 * @example
 * ```typescript
 * const audio = useAudio('path/to/audio.mp3', { volume: 0.5, playbackRate: 1.5 });
 * audio.play();
 * ```
 */

export const useAudio = (src: string, { volume = 1, playbackRate = 1 }) => {
  const audio = useRef(new Audio(src))

  useEffect(() => {
    audio.current.volume = volume
  }, [volume])

  useEffect(() => {
    audio.current.playbackRate = playbackRate
  }, [playbackRate])

  return audio.current
}
