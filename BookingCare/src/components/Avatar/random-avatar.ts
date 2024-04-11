export const randomAvatar = (pictureId: number): string => {
  if (pictureId != null) {
    pictureId %= 10
  }
  pictureId ??= (Math.random() * 9) | 0
  return `../assets/doctors/avatar-${pictureId}.png`
}

export const hashCode = (s: string): number => {
  return s.charCodeAt(0)
}
