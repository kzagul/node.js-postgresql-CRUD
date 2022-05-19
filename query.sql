CREATE TABLE IF NOT EXISTS public.locate
(
    id integer NOT NULL DEFAULT nextval('location_id_seq'::regclass),
    address text COLLATE pg_catalog."default" NOT NULL,
    longitude text COLLATE pg_catalog."default",
    latitude text COLLATE pg_catalog."default",
    area text COLLATE pg_catalog."default",
    CONSTRAINT location_pkey PRIMARY KEY (id)
)
