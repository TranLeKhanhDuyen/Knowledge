interface Place {
  id: number;
  name: string;
  description: string;
  imageId: string;
}

export function getImageUrl(place: Place): string {
  return `https://i.imgur.com/${place.imageId}l.jpg`;
}
