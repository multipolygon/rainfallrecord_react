import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NextLink from 'next/link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';
import Layout from '../components/Layout';
import { ContentBox, H2, P } from '../components/Typography';

export default function Index() {
    return (
        <Layout>
            <ContentBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box mt={2.5}>
                            <NextLink href="/location" as="/location?id=0">
                                <Paper
                                    component="img"
                                    src="/images/example.png"
                                    style={{ maxWidth: '100%', cursor: 'pointer' }}
                                    alt="demo screen shot"
                                />
                            </NextLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <H2>Free and No Ads!</H2>
                        <P>
                            You can create a record sheet on this website for your own rainfall and
                            temperature measurements.
                        </P>
                        <ContentBox>
                            <Link
                                component={Button}
                                variant="outlined"
                                href="/location"
                                as="/location?id=0"
                            >
                                Try a Live Demo Now
                            </Link>
                            <br />
                            <small>No sign-up required.</small>
                        </ContentBox>
                        <H2>Features</H2>
                        <P>
                            Spreadsheet-style data entry with live charts, totals, monthly averages
                            and annual averages.
                        </P>
                        <H2>Easy to Use</H2>
                        <P>
                            There is no software to download or install. Simply register and start
                            entering data directly on this website.
                        </P>
                        <P>Charts are automatically displayed and updated for your data.</P>
                        <P>You will get a direct, shareable, public URL linking to your records.</P>
                        <H2>Crowd-Sourcing and Web 2.0</H2>
                        <P>
                            This service aims to assist individuals in the recording, analysis and
                            sharing of their own climate data.
                        </P>
                        <P>
                            At the same time there is the hope of collecting valuable climate
                            records by means of collaborative and distributed public effort – termed{' '}
                            <a href="http://en.wikipedia.org/wiki/Crowd_sourcing">crowd-sourcing</a>
                        </P>
                        <H2>Creative Commons license</H2>
                        <P>
                            All data collected by this service is provided under the{' '}
                            <a href="http://creativecommons.org/licenses/by-sa/2.5/au/">
                                Creative Commons Attribution-Share Alike 2.5 Australia License
                            </a>
                            .
                        </P>
                        <P>All record sheet data is publicly visible.</P>
                        <H2>Data Export</H2>
                        <P>
                            Its always possible to download your raw data for any year of any record
                            sheet. The data is provided in CSV format which can be viewed and edited
                            in most spread sheet software.
                        </P>
                        <P>
                            You should regularly back-up your own data by printing it or using the
                            buttons found at the bottom of the record page (below the charts).
                        </P>
                        <P>
                            An daily, external backup is available at{' '}
                            <a href="https://github.com/multipolygon/rainfallrecord_data/tree/master/locations">
                                GitHub
                            </a>
                            .
                        </P>
                        <H2>Mobile App</H2>
                        <P>
                            Install the app to your home-screen for the full-screen experience. For
                            iPhone or iPad, open this page in Safari, tap the menu icon (
                            <span className="mdi mdi-export-variant" />) in the bottom toolbar and
                            choose <em>Add to Home Screen</em>. For Android, tap the menu icon (
                            <span className="mdi mdi-dots-vertical" />) at the top-right then choose{' '}
                            <em>Add To Home screen</em>.
                        </P>
                        <H2>Feedback and Support</H2>
                        <P>
                            Please email <em>multipolygon@gmail.com</em>
                        </P>
                    </Grid>
                </Grid>
            </ContentBox>
        </Layout>
    );
}
