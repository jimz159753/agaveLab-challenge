--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3 (Ubuntu 10.3-1.pgdg16.04+1)
-- Dumped by pg_dump version 10.3 (Ubuntu 10.3-1.pgdg16.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: storeschema; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA storeschema;


ALTER SCHEMA storeschema OWNER TO postgres;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer,
    code text,
    name text,
    price real
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    code text,
    name text,
    id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, code, name, price) FROM stdin;
1	HAT	Hat	7.5
1	PANTS	Pants	5
1	TSHIRT	T-Shirt	20
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (code, name, id) FROM stdin;
helloworld	luis	\N
\.


--
-- PostgreSQL database dump complete
--

