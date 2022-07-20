import React, { useState, useEffect } from 'react';
import axios from "axios";
import './table-page.scss'
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Button,
  Drawer,
  Box
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {VisibilityOff} from "@mui/icons-material";

const src = 'https://swapi.dev/api/'

const TablePage = () => {
  const [links, setLinks] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false,);
  const [toggleClearTable, setToggleClearTable] = useState(false);
  const [Films, setFilms] = useState([]);
  const [People, setPeople] = useState([]);
  const [Planets, setPlanets] = useState([]);
  const [Species, setSpecies] = useState([]);
  const [Starships, setStarships] = useState([]);
  const [Vehicles, setVehicles] = useState([]);
  //******************* vision *******************\\
  const [visFilms, setVisFilms] = useState(false)
  const [visPeople, setVisPeople] = useState(false)
  const [visPlanets, setVisPlanets] = useState(false)
  const [visSpecies, setVisSpecies] = useState(false)
  const [visStarships, setVisStarships] = useState(false)
  const [visVehicles, setVisVehicles] = useState(false)
  const [visiblyTableOver, setVisiblyTableOver] = useState(true)
  
  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setLinks(response.data)
      })
  });
  const clearTable = () => {
    setFilms([])
    setPeople([])
    setPlanets([])
    setSpecies([])
    setStarships([])
    setVehicles([])
  }
  const handleFilmsLink = () => {
    axios
      .get(links.films)
      .then((require) => setFilms(require.data.results))
    setVisFilms(true)
  }
  const handlePeopleLink = () => {
    axios
      .get(links.people)
      .then((require) => setPeople(require.data.results))
    setVisPeople(true)
  }
  const handlePlanetsLink = () => {
    axios
      .get(links.planets)
      .then((require) => setPlanets(require.data.results))
    setVisPlanets(true)
  }
  const handleSpeciesLink = () => {
    axios
      .get(links.species)
      .then((require) => setSpecies(require.data.results))
    setVisSpecies(true)
  }
  const handleStarshipsLink = () => {
    axios
      .get(links.starships)
      .then((require) => setStarships(require.data.results))
    setVisStarships(true)
  }
  const handleVehiclesLink = () => {
    axios
      .get(links.vehicles)
      .then((require) => setVehicles(require.data.results))
    setVisVehicles(true)
  }
  const visiblyTableFalse = () => {
    setVisFilms(false)
    setVisPeople(false)
    setVisPlanets(false)
    setVisSpecies(false)
    setVisStarships(false)
    setVisVehicles(false)
  }
  const visiblyTableTrue = () => {
    setVisFilms(true)
    setVisPeople(true)
    setVisPlanets(true)
    setVisSpecies(true)
    setVisStarships(true)
    setVisVehicles(true)
  }

  return (
    <>
      <Box>
        <Button class="button__drawer" onClick={() => {
           setIsDrawerOpen(true)
           (toggleClearTable? clearTable() : '')
        }}>
           <p>Open menu</p>
        </Button>
        <Button variant='contained' href='/'>
          Go to landing page
        </Button>
      </Box>
      <Button
        title="If this button is enabled, the data is removed from the table when you click on side menu."
        onClick={() => setToggleClearTable(!toggleClearTable)}
        class={toggleClearTable? 'button-clear-on' : 'button-clear-off'}
      >
        {toggleClearTable? <p>On</p> : <p>Off</p>}
        <p>Clear table</p>
      </Button>
      <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box class='drawer-space'>
          <List>
            {/*1*/}
            <ListItem>
              <ListItemButton onClick={handleFilmsLink}>
                <ListItemText primary="Films" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() => setVisFilms(!visFilms)}>
                  {visFilms? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => setFilms([])}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            {/*2*/}
            <ListItem>
              <ListItemButton onClick={handlePeopleLink}>
                <ListItemText primary="People" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() => setVisPeople(!visPeople)}>
                  {visPeople? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => setPeople([])}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            {/*3*/}
            <ListItem>
              <ListItemButton onClick={handlePlanetsLink}>
                <ListItemText primary="Planets" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() => setVisPlanets(!visPlanets)}>
                  {visPlanets? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => setPlanets([])}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            {/*4*/}
            <ListItem>
              <ListItemButton onClick={handleSpeciesLink}>
                <ListItemText primary="Species" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() => setVisSpecies(!visSpecies)}>
                  {visSpecies? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => setSpecies([])}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            {/*5*/}
            <ListItem>
              <ListItemButton onClick={handleStarshipsLink}>
                <ListItemText primary="Starships" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() => setVisStarships(!visStarships)}>
                  {visStarships? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => setStarships([])}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            {/*6*/}
            <ListItem>
              <ListItemButton onClick={handleVehiclesLink}>
                <ListItemText primary="Vehicles" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() => setVisVehicles(!visVehicles)}>
                  {visVehicles? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => setVehicles([])}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            {/*7*/}
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Clean the entire table" />
              </ListItemButton>
              <ListItemIcon>
                <ListItemButton onClick={() =>
                  setVisiblyTableOver(!visiblyTableOver)
                  (visiblyTableOver? visiblyTableFalse() : visiblyTableTrue())
                }>
                  {visiblyTableOver? <VisibilityIcon /> : <VisibilityOff/>}
                </ListItemButton>
              </ListItemIcon>
              <ListItemIcon>
                <ListItemButton onClick={() => clearTable()}>
                  <DeleteIcon />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box class={visFilms? 'visibility-on' : 'visibility-off'}>
        <TableContainer sx={{maxWidth: '1000px', marginInline:'auto'}}  component={Paper}>
          <Table padding='normal'  aria-label='table'>
            <TableHead>
              <TableRow class='table-row__head'>
                <TableCell>Title</TableCell>
                <TableCell align="center">Director</TableCell>
                <TableCell align="center">Edited</TableCell>
                <TableCell align="center">Episode id</TableCell>
                <TableCell align="center">Producer</TableCell>
                <TableCell align="center">Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Films.map(Article =>
                <TableRow class='table-row__body'>
                  <TableCell>{Article.title}</TableCell>
                  <TableCell align="center">{Article.director}</TableCell>
                  <TableCell align="center">{Article.edited}</TableCell>
                  <TableCell align="center">{Article.episode_id}</TableCell>
                  <TableCell align="center">{Article.producer}</TableCell>
                  <TableCell align="center">{Article.created}</TableCell>
                </TableRow>
              )}
            </TableBody>
            <p>Films</p>
          </Table>
        </TableContainer>
      </Box>
      <Box class={visPeople? 'visibility-on' : 'visibility-off'}>
        <TableContainer sx={{maxWidth: '1000px', marginInline:'auto'}}  component={Paper}>
          <Table padding='normal'  aria-label='table'>
            <TableHead >
              <TableRow class='table-row__head'>
                <TableCell>Name</TableCell>
                <TableCell align="center">Height</TableCell>
                <TableCell align="center">Mass</TableCell>
                <TableCell align="center">Hair color</TableCell>
                <TableCell align="center">Skin color</TableCell>
                <TableCell align="center">Eye color</TableCell>
                <TableCell align="center">Birth year</TableCell>
                <TableCell align="center">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {People.map(Article =>
                <TableRow class='table-row__body'>
                  <TableCell>{Article.name}</TableCell>
                  <TableCell align="center">{Article.height}</TableCell>
                  <TableCell align="center">{Article.mass}</TableCell>
                  <TableCell align="center">{Article.hair_color}</TableCell>
                  <TableCell align="center">{Article.skin_color}</TableCell>
                  <TableCell align="center">{Article.eye_color}</TableCell>
                  <TableCell align="center">{Article.birth_year}</TableCell>
                  <TableCell align="center">{Article.gender}</TableCell>
                </TableRow>
              )}
            </TableBody>
            <p>People</p>
          </Table>
        </TableContainer>
      </Box>
      <Box class={visPlanets? 'visibility-on' : 'visibility-off'}>
        <TableContainer sx={{maxWidth: '1000px', marginInline:'auto'}}  component={Paper}>
          <Table padding='normal'  aria-label='table'>
            <TableHead >
              <TableRow class='table-row__head'>
                <TableCell>Name</TableCell>
                <TableCell align="center">Climate</TableCell>
                <TableCell align="center">Diameter</TableCell>
                <TableCell align="center">Gravity</TableCell>
                <TableCell align="center">Orbital period</TableCell>
                <TableCell align="center">Population</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Planets.map(Article =>
                <TableRow class='table-row__body'>
                  <TableCell>{Article.name}</TableCell>
                  <TableCell align="center">{Article.climate}</TableCell>
                  <TableCell align="center">{Article.diameter}</TableCell>
                  <TableCell align="center">{Article.gravity}</TableCell>
                  <TableCell align="center">{Article.orbital_period}</TableCell>
                  <TableCell align="center">{Article.population}</TableCell>
                </TableRow>
              )}
            </TableBody>
            <p>Planets</p>
          </Table>
        </TableContainer>
      </Box>
      <Box class={visSpecies? 'visibility-on' : 'visibility-off'}>
        <TableContainer sx={{maxWidth: '1000px', marginInline:'auto'}}  component={Paper}>
          <Table padding='normal'  aria-label='table'>
            <TableHead >
              <TableRow class='table-row__head'>
                <TableCell>Name</TableCell>
                <TableCell align="center">Average height</TableCell>
                <TableCell align="center">Average lifespan</TableCell>
                <TableCell align="center">Classification</TableCell>
                <TableCell align="center">Designation</TableCell>
                <TableCell align="center">Eye colors</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Species.map(Article =>
                <TableRow class='table-row__body'>
                  <TableCell>{Article.name}</TableCell>
                  <TableCell align="center">{Article.average_height}</TableCell>
                  <TableCell align="center">{Article.average_lifespan}</TableCell>
                  <TableCell align="center">{Article.classification}</TableCell>
                  <TableCell align="center">{Article.designation}</TableCell>
                  <TableCell align="center">{Article.eye_colors}</TableCell>
                </TableRow>
              )}
            </TableBody>
            <p>Species</p>
          </Table>
        </TableContainer>
      </Box>
      <Box class={visStarships? 'visibility-on' : 'visibility-off'}>
        <TableContainer sx={{maxWidth: '1000px', marginInline:'auto'}}  component={Paper}>
          <Table padding='normal'  aria-label='table'>
            <TableHead >
              <TableRow class='table-row__head'>
                <TableCell>Name</TableCell>
                <TableCell align="center">MGLT</TableCell>
                <TableCell align="center">Consumables</TableCell>
                <TableCell align="center">Cost in credits</TableCell>
                <TableCell align="center">Crew</TableCell>
                <TableCell align="center">Manufacturer</TableCell>
                <TableCell align="center">Model</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Starships.map(Article =>
                <TableRow class='table-row__body'>
                  <TableCell>{Article.name}</TableCell>
                  <TableCell align="center">{Article.MGLT}</TableCell>
                  <TableCell align="center">{Article.consumables}</TableCell>
                  <TableCell align="center">{Article.cost_in_credits}</TableCell>
                  <TableCell align="center">{Article.crew}</TableCell>
                  <TableCell align="center">{Article.manufacturer}</TableCell>
                  <TableCell align="center">{Article.model}</TableCell>
                </TableRow>
              )}
            </TableBody>
            <p>Starships</p>
          </Table>
        </TableContainer>
      </Box>
      <Box class={visVehicles? 'visibility-on' : 'visibility-off'}>
        <TableContainer sx={{maxWidth: '1000px', marginInline:'auto'}}  component={Paper}>
          <Table padding='normal'  aria-label='table'>
            <TableHead >
              <TableRow class='table-row__head'>
                <TableCell>Name</TableCell>
                <TableCell align="center">Cargo capacity</TableCell>
                <TableCell align="center">Consumables</TableCell>
                <TableCell align="center">Cost in credits</TableCell>
                <TableCell align="center">Crew</TableCell>
                <TableCell align="center">Manufacturer</TableCell>
                <TableCell align="center">Model</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Vehicles.map(Article =>
                <TableRow class='table-row__body'>
                  <TableCell>{Article.name}</TableCell>
                  <TableCell align="center">{Article.cargo_capacity}</TableCell>
                  <TableCell align="center">{Article.consumables}</TableCell>
                  <TableCell align="center">{Article.cost_in_credits}</TableCell>
                  <TableCell align="center">{Article.crew}</TableCell>
                  <TableCell align="center">{Article.manufacturer}</TableCell>
                  <TableCell align="center">{Article.model}</TableCell>
                </TableRow>
              )}
            </TableBody>
            <p>Vehicles</p>
          </Table>
        </TableContainer>
      </Box>
     </>
  );
}

export default TablePage;
