
// A simple service to manage and play audio effects.
// NOTE: Audio elements must be present in the HTML with corresponding IDs.

export type SoundType = 'click' | 'navigate' | 'success';

class SoundService {
    private isSoundEnabled: boolean = true;

    constructor() {
        // Can be initialized with user preference later
    }

    public setSoundEnabled(enabled: boolean): void {
        this.isSoundEnabled = enabled;
    }

    public getIsSoundEnabled(): boolean {
        return this.isSoundEnabled;
    }

    public playSound(type: SoundType): void {
        if (!this.isSoundEnabled) {
            return;
        }

        try {
            const audioElement = document.getElementById(`${type}-sound`) as HTMLAudioElement | null;
            if (audioElement) {
                // Rewind to start in case it's already playing
                audioElement.currentTime = 0;
                audioElement.play().catch(error => {
                    // Autoplay is often blocked by browsers until a user interaction.
                    // This is fine, we just log it for debugging.
                    console.warn(`Sound playback failed for '${type}':`, error);
                });
            } else {
                console.warn(`Audio element for '${type}' not found.`);
            }
        } catch (error) {
            console.error("Error playing sound:", error);
        }
    }
}

// Export a singleton instance of the service
export const soundService = new SoundService();