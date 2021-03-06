export interface IMovie
{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export type Movies = Array<IMovie>;